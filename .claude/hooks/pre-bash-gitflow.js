#!/usr/bin/env node
// HOOK: PreToolUse / matcher "Bash"
// Enforcement do Gitflow deste portfolio (resumo em .claude/rules/gitflow.md).
//
// BLOQUEIA (exit 2):
//   1. `git commit` quando a branch atual e uma permanente: master / homolog / develop
//      -> toda mudanca entra por PR a partir de uma branch de trabalho.
//   2. Criar branch (`git checkout -b`, `git switch -c`, `git branch <nome>`)
//      cujo nome NAO casa  tipo/<descricao-kebab>  com
//      tipo em {feature, fix, chore, refactor, docs, hotfix}.
//   3. `gh pr create` fora das promocoes: PR --base homolog so a partir de
//      develop; PR --base master/main so a partir de homolog (ou hotfix/).
//      feature/fix/chore/... entram em develop por `git merge` direto, sem PR.
//
// NAO bloqueia nada alem de git/gh.
// Excecao pontual (token de arquivo, NAO e env var):
//   node .claude/hooks/gitflow-bypass.js "<motivo>" [--uses N] [--minutes M]
// Confirmar com o usuario antes -- ex: dependabot/..., revert-...
const {
  readStdin, currentBranch, consumeBypass, recordBypass, bypassBanner,
  emitJson, activeBypassKinds, block,
} = require("./lib");

const PROTECTED = ["master", "main", "homolog", "develop"];
const BRANCH_RE = /^(feature|fix|chore|refactor|docs|hotfix)\/[a-z0-9][a-z0-9-]*$/;

const input = readStdin();
const cmd = (input.tool_input && input.tool_input.command) || "";
const parts = cmd.split(/&&|\|\||;|\n/).map((s) => s.trim());

function pendingBlockMessage() {
  for (const c of parts) {
    // 1. commit direto em branch permanente
    if (/^git\s+(-C\s+\S+\s+)?commit\b/.test(c) && !/--dry-run/.test(c)) {
      const b = currentBranch();
      if (PROTECTED.includes(b)) {
        return (
          `[Gitflow] Commit bloqueado: voce esta em "${b}", uma branch permanente (master/homolog/develop).\n` +
          `Nunca commite direto nelas. Crie uma branch de trabalho a partir de develop atualizado:\n` +
          `  git checkout develop && git pull origin develop\n` +
          `  git checkout -b feature/descricao-curta   (ou fix/ chore/ refactor/ docs/)\n` +
          `Depois faca o commit nela e um merge em "develop" (sem PR). Regra: .claude/rules/gitflow.md\n` +
          `PARE e alinhe com o usuario antes de contornar (.claude/rules/fluxo-de-trabalho.md).`
        );
      }
    }

    // 2. criacao de branch fora do formato tipo/<descricao>
    let name = null;
    const m =
      c.match(/^git\s+checkout\s+-b\s+(\S+)/) ||
      c.match(/^git\s+switch\s+-c\s+(\S+)/);
    if (m) name = m[1];
    else {
      const bm = c.match(/^git\s+branch\s+([^-]\S*)\s*$/);
      if (bm) name = bm[1];
    }
    if (name) {
      name = name.replace(/^['"]|['"]$/g, "");
      if (!BRANCH_RE.test(name) && !PROTECTED.includes(name)) {
        return (
          `[Gitflow] Nome de branch invalido: "${name}".\n` +
          `Formato exigido:  tipo/<descricao-kebab>\n` +
          `  tipo em: feature | fix | chore | refactor | docs | hotfix\n` +
          `  descricao: minusculas, digitos e hifens, sem acento/espaco\n` +
          `Ex: git checkout -b feature/secao-depoimentos\n` +
          `Regra: .claude/rules/gitflow.md. PARE e confirme com o usuario\n` +
          `(bypass de tooling: node .claude/hooks/gitflow-bypass.js "<motivo>").`
        );
      }
    }

    // 3. gh pr create so nas promocoes: develop -> homolog e homolog -> master.
    //    (feature/fix/chore/... entram em develop por merge direto, sem PR.)
    if (/^gh\s+pr\s+create\b/.test(c)) {
      const baseMatch =
        c.match(/--base[=\s]+(\S+)/) || c.match(/-B[=\s]+(\S+)/);
      const base = baseMatch
        ? baseMatch[1].replace(/^['"]|['"]$/g, "")
        : null;
      const b = currentBranch();
      const isHotfix = /^hotfix\//.test(b);
      if (base === "homolog" && b !== "develop" && !isHotfix) {
        return (
          `[Gitflow] PR bloqueado: "--base homolog" a partir de "${b}".\n` +
          `A promocao para homolog e um PR de "develop". So "hotfix/..." tambem pode.\n` +
          `Regra: .claude/rules/gitflow.md. PARE e confirme com o usuario.`
        );
      }
      if ((base === "master" || base === "main") && b !== "homolog" && !isHotfix) {
        return (
          `[Gitflow] PR bloqueado: "--base ${base}" a partir de "${b}".\n` +
          `A promocao para producao e um PR de "homolog". So "hotfix/..." tambem pode.\n` +
          `Regra: .claude/rules/gitflow.md. PARE e confirme com o usuario.`
        );
      }
    }
  }
  return null;
}

const pending = pendingBlockMessage();

if (!pending) {
  const isCommit = parts.some(
    (c) => /^git\s+(-C\s+\S+\s+)?commit\b/.test(c) && !/--dry-run/.test(c)
  );
  const active = activeBypassKinds();
  if (isCommit && active.length) {
    emitJson({
      systemMessage:
        `!! Commit com token(s) de bypass ativo(s): ${active
          .map((k) => `.claude/${k}-bypass.json`)
          .join(", ")}.\n` +
        `   Confirme que e intencional e apague o token se nao for mais usar.`,
    });
  }
  process.exit(0);
}

const bp = consumeBypass("gitflow");
if (bp.state === "granted") {
  const count = recordBypass("gitflow", input.session_id, (cmd || "").slice(0, 120));
  const banner =
    bypassBanner("gitflow", bp, count) + `\n   comando: ${(cmd || "").slice(0, 120)}`;
  process.stderr.write("[Gitflow] " + banner + "\n");
  emitJson({
    systemMessage: banner,
    hookSpecificOutput: {
      hookEventName: "PreToolUse",
      permissionDecision: "allow",
      permissionDecisionReason: banner,
    },
  });
  process.exit(0);
}
if (bp.state === "expired") {
  process.stderr.write(
    "[Gitflow] token de bypass expirado/esgotado -- ignorado e removido. Bloqueio normal aplicado.\n"
  );
} else if (bp.state === "invalid") {
  process.stderr.write(
    `[Gitflow] token de bypass ${bp.detail}. Bloqueio normal aplicado.\n`
  );
}
block(pending);
