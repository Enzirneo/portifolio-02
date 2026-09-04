// Utilidades compartilhadas pelos hooks. Sem dependencias externas (Node puro).
// Adaptado do setup de governanca do projeto commission-insight para este
// portfolio (Next.js, app unico em src/, sem backend).
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();

function readStdin() {
  try {
    return JSON.parse(fs.readFileSync(0, "utf8") || "{}");
  } catch {
    return {};
  }
}

// cmd.exe pode estar desativado por politica -- usa PowerShell como shell dos
// hooks no Windows. Sobrescrivivel via env CLAUDE_HOOK_SHELL.
const HOOK_SHELL =
  process.env.CLAUDE_HOOK_SHELL ||
  (process.platform === "win32" ? "powershell.exe" : "/bin/sh");

function sh(cmd, opts = {}) {
  return execSync(cmd, {
    cwd: ROOT,
    encoding: "utf8",
    shell: HOOK_SHELL,
    stdio: ["ignore", "pipe", "pipe"],
    ...opts,
  });
}

function currentBranch() {
  // Le .git/HEAD direto -- nao depende do binario git no PATH do shell do hook.
  try {
    let gitPath = path.join(ROOT, ".git");
    const st = fs.statSync(gitPath);
    if (st.isFile()) {
      const gd = fs
        .readFileSync(gitPath, "utf8")
        .trim()
        .replace(/^gitdir:\s*/, "");
      gitPath = path.isAbsolute(gd) ? gd : path.resolve(ROOT, gd);
    }
    const head = fs.readFileSync(path.join(gitPath, "HEAD"), "utf8").trim();
    const m = head.match(/^ref:\s*refs\/heads\/(.+)$/);
    if (m) return m[1];
  } catch {}
  try {
    return sh("git branch --show-current").trim();
  } catch {}
  return "";
}

// Classifica um caminho de arquivo. Retorna { kind, area } onde:
//   kind: "prod" | "test" | "other"
//   area: "web" | null
// "web" = codigo TS/TSX da aplicacao Next em src/. (Ha espaco para uma area
// "backend" no futuro; hoje o portfolio nao tem uma.)
function classify(fp) {
  if (!fp) return { kind: "other", area: null };
  const p = fp.replace(/\\/g, "/");
  const isTestName =
    /(\.test\.|\.spec\.|(^|\/)__tests__\/|(^|\/)tests?\/)/.test(p);

  if (/(^|\/)src\//.test(p) && /\.(ts|tsx|js|jsx)$/.test(p)) {
    if (isTestName || /(^|\/)src\/test\//.test(p))
      return { kind: "test", area: "web" };
    if (
      /\.d\.ts$/.test(p) ||
      /(^|\/)src\/app\/.*\/(layout|page|route|loading|error|not-found|sitemap|robots|opengraph-image|manifest)\.(ts|tsx)$/.test(
        p
      )
    ) {
      return { kind: "other", area: "web" };
    }
    return { kind: "prod", area: "web" };
  }
  return { kind: "other", area: null };
}

// Escopo do enforcement de TDD neste repo: SO logica pura (helpers, dados,
// hooks, i18n) -- componentes visuais .tsx ficam de fora. Ver .claude/rules/tdd.md.
function isPureLogic(fp) {
  if (!fp) return false;
  const p = fp.replace(/\\/g, "/");
  return (
    /(^|\/)src\/shared\/lib\//.test(p) ||
    /(^|\/)src\/shared\/data\//.test(p) ||
    /(^|\/)src\/[^?]*\/hooks\//.test(p) ||
    /(^|\/)use[A-Z][A-Za-z0-9]*\.(ts|tsx)$/.test(p)
  );
}

// Possiveis caminhos de teste para um arquivo de producao.
function candidateTestPaths(fp) {
  const p = fp.replace(/\\/g, "/");
  const out = [];
  const dir = path.posix.dirname(p);
  const base = path.posix.basename(p).replace(/\.(ts|tsx|js|jsx)$/, "");
  const ext = (p.match(/\.(tsx?|jsx?)$/) || [".ts"])[0];
  for (const e of [ext, ".ts", ".tsx"]) {
    out.push(
      `${dir}/${base}.test${e}`,
      `${dir}/${base}.spec${e}`,
      `${dir}/__tests__/${base}.test${e}`
    );
  }
  return [...new Set(out)].map((x) =>
    path.isAbsolute(x) ? x : path.join(ROOT, x)
  );
}

function anyExists(paths) {
  return paths.some((x) => {
    try {
      return fs.statSync(x).isFile();
    } catch {
      return false;
    }
  });
}

// Heuristica: o conteudo introduz uma funcao/metodo novo que nao existia antes?
function introducesNewLogic(input) {
  const after = input.content ?? input.new_string ?? "";
  const before = input.old_string ?? "";
  const isWriteNewFile = input.content !== undefined;
  const names = new Set();
  const re =
    /(?:^|\s)(?:export\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)|(?:^|\s)def\s+([A-Za-z_]\w*)|(?:^|\s)const\s+([A-Za-z_$][\w$]*)\s*=\s*(?:async\s*)?\(/gm;
  let m;
  while ((m = re.exec(after))) names.add(m[1] || m[2] || m[3]);
  if (isWriteNewFile) {
    try {
      fs.statSync(input.file_path);
    } catch {
      return names.size > 0 || after.trim().length > 0;
    }
  }
  for (const n of names) {
    if (!new RegExp(`\\b${n}\\b`).test(before)) return true;
  }
  return false;
}

const STATE_PATH = path.join(ROOT, ".claude", "tdd-state.json");
function readState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
  } catch {
    return {};
  }
}
function writeState(s) {
  try {
    fs.writeFileSync(STATE_PATH, JSON.stringify(s, null, 2));
  } catch {}
}

function block(msg) {
  process.stderr.write(msg + "\n");
  process.exit(2);
}

// ---------------------------------------------------------------------------
// Bypass PONTUAL por token de arquivo. Token: .claude/<kind>-bypass.json
//   { reason, expiresAt (ISO), usesLeft }
//   - ausente          -> SEM bypass (estado seguro padrao)
//   - expirado / zerado -> SEM bypass; o arquivo e removido
//   - valido           -> concede 1 uso e decrementa usesLeft
// kind e {"tdd", "gitflow"}.
// ---------------------------------------------------------------------------
const BYPASS_FILE = (kind) =>
  path.join(ROOT, ".claude", `${kind}-bypass.json`);

function consumeBypass(kind) {
  const p = BYPASS_FILE(kind);
  let tok;
  try {
    tok = JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    if (e && e.code === "ENOENT") return { state: "absent" };
    try {
      fs.unlinkSync(p);
    } catch {}
    return { state: "invalid", detail: "arquivo ilegivel -- removido" };
  }
  const exp = Date.parse(tok && tok.expiresAt);
  const uses = Number.isInteger(tok && tok.usesLeft) ? tok.usesLeft : 0;
  if (!Number.isFinite(exp) || exp <= Date.now() || uses <= 0) {
    try {
      fs.unlinkSync(p);
    } catch {}
    return {
      state: "expired",
      reason: tok && tok.reason,
      expiresAt: tok && tok.expiresAt,
    };
  }
  const usesLeft = uses - 1;
  if (usesLeft <= 0) {
    try {
      fs.unlinkSync(p);
    } catch {}
  } else {
    try {
      fs.writeFileSync(
        p,
        JSON.stringify({ ...tok, usesLeft }, null, 2) + "\n"
      );
    } catch {}
  }
  return {
    state: "granted",
    reason: (tok && tok.reason) || "(sem motivo)",
    expiresAt: tok && tok.expiresAt,
    usesLeft,
  };
}

function armBypass(kind, { reason, uses = 1, minutes = 15 } = {}) {
  if (!reason || !String(reason).trim()) {
    throw new Error(
      `motivo obrigatorio: node .claude/hooks/${kind}-bypass.js "<motivo>" [--uses N] [--minutes M]`
    );
  }
  const mins = parseInt(minutes, 10) || 15;
  const tok = {
    reason: String(reason).trim(),
    expiresAt: new Date(Date.now() + mins * 60_000).toISOString(),
    usesLeft: Math.max(1, parseInt(uses, 10) || 1),
  };
  fs.writeFileSync(BYPASS_FILE(kind), JSON.stringify(tok, null, 2) + "\n");
  return tok;
}

function activeBypassKinds() {
  return ["tdd", "gitflow"].filter((k) => {
    try {
      return fs.statSync(BYPASS_FILE(k)).isFile();
    } catch {
      return false;
    }
  });
}

const AUDIT_PATH = path.join(ROOT, ".claude", "bypass-audit.json");
function readAudit() {
  try {
    return JSON.parse(fs.readFileSync(AUDIT_PATH, "utf8"));
  } catch {
    return {};
  }
}
function writeAudit(a) {
  try {
    fs.writeFileSync(AUDIT_PATH, JSON.stringify(a, null, 2) + "\n");
  } catch {}
}

function recordBypass(kind, sessionId, target) {
  const a = readAudit();
  const sid = sessionId || "?";
  if (a.sessionId !== sid) {
    a.sessionId = sid;
    a.count = 0;
    a.events = [];
  }
  a.count = (a.count || 0) + 1;
  const ev = { at: new Date().toISOString(), kind, target: target || "?" };
  a.events = (a.events || []).slice(-19).concat(ev);
  if (kind === "tdd") a.pending = ev;
  writeAudit(a);
  return a.count;
}

function bypassBanner(kind, bp, count) {
  const K = kind === "tdd" ? "TDD" : "Gitflow";
  return (
    `!! BYPASS DE ${K} ATIVO -- esta acao NAO passou pelas checagens de ${K}.\n` +
    `   motivo: ${bp.reason}\n` +
    `   token: ${bp.usesLeft} uso(s) restante(s) . expira ${bp.expiresAt}\n` +
    `   acoes sob bypass nesta sessao ate agora: ${count}`
  );
}

function emitJson(obj) {
  process.stdout.write(JSON.stringify(obj));
}

function runArmCli(kind) {
  const argv = process.argv.slice(2);
  const opts = { reason: "", uses: 1, minutes: 15 };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--uses") opts.uses = argv[++i];
    else if (argv[i] === "--minutes") opts.minutes = argv[++i];
    else if (!opts.reason && !argv[i].startsWith("--")) opts.reason = argv[i];
  }
  try {
    const tok = armBypass(kind, opts);
    process.stdout.write(
      `[${kind}] bypass ARMADO -- ${tok.usesLeft} uso(s), expira ${tok.expiresAt}\n` +
        `  motivo: ${tok.reason}\n` +
        `  cancele antes da hora apagando .claude/${kind}-bypass.json\n`
    );
  } catch (e) {
    process.stderr.write(String((e && e.message) || e) + "\n");
    process.exit(1);
  }
}

module.exports = {
  ROOT, readStdin, sh, currentBranch, classify, isPureLogic,
  candidateTestPaths, anyExists, introducesNewLogic, readState, writeState,
  STATE_PATH, block, BYPASS_FILE, consumeBypass, armBypass, runArmCli,
  activeBypassKinds, readAudit, writeAudit, recordBypass, bypassBanner, emitJson,
  AUDIT_PATH,
};
