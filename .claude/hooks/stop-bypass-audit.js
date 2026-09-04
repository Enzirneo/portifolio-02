#!/usr/bin/env node
// HOOK: Stop -- resumo ao fim de cada resposta se houve bypass nesta sessao.
// Nao bloqueia; so emite um systemMessage lembrando que N acoes driblaram as
// checagens e/ou que ainda ha token de bypass no disco.
const { readStdin, readAudit, activeBypassKinds } = require("./lib");

const input = readStdin();
const a = readAudit();
const active = activeBypassKinds();

const sameSession = a.sessionId && a.sessionId === input.session_id;
const n = sameSession ? a.count || 0 : 0;

if (!n && active.length === 0) process.exit(0);

const lines = [];
if (n) {
  lines.push(
    `!! ${n} acao(oes) rodaram sob BYPASS de TDD/Gitflow nesta sessao -- ` +
      `nao passaram pelas checagens.`
  );
}
if (active.length) {
  lines.push(
    `Token(s) de bypass ainda no disco: ${active
      .map((k) => `.claude/${k}-bypass.json`)
      .join(", ")} -- apague se nao for mais usar (senao o proximo comando que ` +
      `seria bloqueado passa em silencio).`
  );
}

process.stdout.write(JSON.stringify({ systemMessage: lines.join("\n") }));
process.exit(0);
