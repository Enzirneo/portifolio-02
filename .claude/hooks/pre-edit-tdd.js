#!/usr/bin/env node
// HOOK: PreToolUse / matcher "Edit|Write"   [DESLIGADO POR PADRAO NESTE REPO]
//
// Este portfolio e quase todo componente visual + animacao; TDD rende pouco
// aqui, entao o hook NAO esta ligado em .claude/settings.json. Ele fica no repo
// pronto para ser ativado num projeto com mais logica (ex: backend). Para ligar,
// ver .claude/rules/tdd.md -> "Como ativar".
//
// Quando ativo, so age em LOGICA PURA (src/shared/lib, src/shared/data, hooks --
// ver isPureLogic em lib.js). Componentes .tsx de UI nunca sao bloqueados.
//
// BLOQUEIA (exit 2):
//   A. Logica nova e NAO existe arquivo de teste correspondente.
//   B. Ultimo resultado em .claude/tdd-state.json foi FALHA num arquivo diferente.
//   C. Ultimo resultado foi SUCESSO mas o diff acumulado passa de ~30 linhas / 2 arquivos.
//
// Excecao pontual: node .claude/hooks/tdd-bypass.js "<motivo>" [--uses N] [--minutes M]
const path = require("path");
const {
  readStdin, classify, isPureLogic, candidateTestPaths, anyExists,
  introducesNewLogic, readState, sh, consumeBypass, recordBypass,
  bypassBanner, emitJson, block, ROOT,
} = require("./lib");

const input = readStdin();
const ti = input.tool_input || {};
const fp = ti.file_path || "";
const { kind } = classify(fp);

if (kind !== "prod" || !isPureLogic(fp)) process.exit(0);

const rel = path.relative(ROOT, fp).replace(/\\/g, "/");

function pendingBlockMessage() {
  if (introducesNewLogic(ti) && !anyExists(candidateTestPaths(fp))) {
    const cands = candidateTestPaths(fp)
      .map((x) => "  " + path.relative(ROOT, x).replace(/\\/g, "/"))
      .join("\n");
    return (
      `[TDD] Nao existe teste para "${rel}" ainda e esta edicao introduz logica nova.\n` +
      `Crie o teste primeiro (Red), veja-o falhar pelo motivo certo, depois implemente (Green).\n` +
      `Caminhos de teste aceitos (crie um deles):\n${cands}\n` +
      `Regra: .claude/rules/tdd.md.`
    );
  }

  const st = readState();
  if (
    st.lastResult === "fail" &&
    st.file &&
    path.resolve(ROOT, st.file) !== path.resolve(fp)
  ) {
    return (
      `[TDD] Ha teste falhando em "${st.file}" (verificado ${st.at || "?"}).\n` +
      `Resolva o vermelho nesse arquivo antes de editar "${rel}".`
    );
  }

  if (st.lastResult === "pass") {
    let stat = "";
    try {
      stat = sh("git diff --stat -- src");
    } catch {}
    const lines = stat.trim().split("\n").filter(Boolean);
    const summary = lines[lines.length - 1] || "";
    const filesChanged = parseInt(
      (summary.match(/(\d+)\s+files?\s+changed/) || [])[1] || "0",
      10
    );
    const insertions = parseInt(
      (summary.match(/(\d+)\s+insertions?/) || [])[1] || "0",
      10
    );
    const deletions = parseInt(
      (summary.match(/(\d+)\s+deletions?/) || [])[1] || "0",
      10
    );
    const churn = insertions + deletions;
    const since = st.churnAtCheck || 0;
    if (churn - since > 30 || filesChanged > 2) {
      return (
        `[TDD] Muita mudanca acumulada sem verificar (${churn} linhas / ${filesChanged} arquivos). ` +
        `Rode os testes antes de continuar:  npm test\n` +
        `Regra: .claude/rules/tdd.md.`
      );
    }
  }

  return null;
}

const pending = pendingBlockMessage();
if (!pending) process.exit(0);

const bp = consumeBypass("tdd");
if (bp.state === "granted") {
  const count = recordBypass("tdd", input.session_id, rel);
  const banner = bypassBanner("tdd", bp, count) + `\n   arquivo: ${rel}`;
  process.stderr.write("[TDD] " + banner + "\n");
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
    "[TDD] token de bypass expirado/esgotado -- ignorado e removido. Bloqueio normal aplicado.\n"
  );
} else if (bp.state === "invalid") {
  process.stderr.write(
    `[TDD] token de bypass ${bp.detail}. Bloqueio normal aplicado.\n`
  );
}
block(pending);
