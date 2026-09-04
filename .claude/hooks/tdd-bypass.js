#!/usr/bin/env node
// Arma um bypass PONTUAL do hook pre-edit-tdd.js criando .claude/tdd-bypass.json.
//
//   node .claude/hooks/tdd-bypass.js "<motivo>" [--uses N] [--minutes M]
//
// (So tem efeito se o hook de TDD estiver habilitado em .claude/settings.json --
// neste portfolio ele vem DESLIGADO por padrao; ver .claude/rules/tdd.md.)
// Padrao: 1 uso, expira em 15 min. NAO e env var.
require("./lib").runArmCli("tdd");
