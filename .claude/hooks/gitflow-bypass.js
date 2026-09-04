#!/usr/bin/env node
// Arma um bypass PONTUAL do hook pre-bash-gitflow.js criando
// .claude/gitflow-bypass.json.
//
//   node .claude/hooks/gitflow-bypass.js "<motivo>" [--uses N] [--minutes M]
//
// Padrao: 1 uso, expira em 15 min. Cada comando git/gh que SERIA bloqueado
// consome 1 uso; ao zerar (ou expirar) o token se apaga sozinho. NAO e env var.
// Confirme com o usuario antes de usar (ex: branch dependabot/..., revert-...).
require("./lib").runArmCli("gitflow");
