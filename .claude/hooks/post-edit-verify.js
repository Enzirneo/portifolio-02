#!/usr/bin/env node
// HOOK: PostToolUse / matcher "Edit|Write"   [DESLIGADO POR PADRAO NESTE REPO]
//
// Depois de editar codigo TS/TSX em src/: roda eslint no arquivo e, se houver um
// runner de teste instalado (vitest), roda a suite relacionada; grava
// .claude/tdd-state.json para o pre-edit-tdd.js.
//
// Neste portfolio NAO ha vitest e o TDD vem desligado, entao este hook nao esta
// ligado em .claude/settings.json. Para ativar (junto com o de TDD), ver
// .claude/rules/tdd.md -> "Como ativar".
const path = require("path");
const { readStdin, classify, sh, writeState, ROOT, readAudit, writeAudit, emitJson } =
  require("./lib");

const input = readStdin();
const ti = input.tool_input || {};
const fp = ti.file_path || "";
const { kind, area } = classify(fp);
if (kind === "other" || area !== "web") process.exit(0);

const rel = path.relative(ROOT, fp).replace(/\\/g, "/");
const msgs = [];
let testResult = null;

function run(cmd) {
  try {
    return { ok: true, out: sh(cmd, { timeout: 120000 }) };
  } catch (e) {
    return { ok: false, out: (e.stdout || "") + (e.stderr || ""), code: e.status };
  }
}
const missing = (o) =>
  /not found|is not recognized|Cannot find module|could not determine executable/i.test(o);

// 1. lint
const lint = run(`npx --no-install eslint "${rel}" --format stylish`);
if (!lint.ok && !missing(lint.out) && /error/i.test(lint.out)) {
  msgs.push("[eslint]\n" + lint.out.trim());
}

// 2. testes relacionados (so se vitest existir)
const t = run(`npx --no-install vitest related "${rel}" --run --reporter=dot`);
if (missing(t.out)) {
  // sem runner: silencioso (esperado neste repo)
} else {
  testResult = t.ok ? "pass" : "fail";
  if (!t.ok) msgs.push("[vitest] testes relacionados FALHARAM:\n" + t.out.trim().slice(-3000));
}

// 3. estado
let churn = 0;
try {
  const stat = sh("git diff --stat -- src").trim().split("\n").pop() || "";
  churn =
    parseInt((stat.match(/(\d+)\s+insertions?/) || [])[1] || "0", 10) +
    parseInt((stat.match(/(\d+)\s+deletions?/) || [])[1] || "0", 10);
} catch {}
if (testResult) {
  writeState({
    file: rel,
    lastResult: testResult,
    at: new Date().toISOString(),
    churnAtCheck: testResult === "pass" ? churn : 0,
  });
}

// aviso de bypass pendente
const audit = readAudit();
let bypassNote = "";
if (audit.pending) {
  bypassNote =
    `!! O edit em "${audit.pending.target}" rodou sob BYPASS de ${String(
      audit.pending.kind
    ).toUpperCase()} -- nao coberto pelo ciclo red-green. (${audit.count} nesta sessao.)`;
  audit.pending = null;
  writeAudit(audit);
}

if (msgs.length) {
  if (bypassNote) msgs.push(bypassNote);
  process.stderr.write(msgs.join("\n\n") + "\n");
  process.exit(2);
}
if (bypassNote) {
  emitJson({
    hookSpecificOutput: {
      hookEventName: "PostToolUse",
      additionalContext: bypassNote,
    },
  });
}
process.exit(0);
