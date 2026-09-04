# Fluxo de trabalho — quando parar e conversar

> Regras de processo para qualquer tarefa neste repo. Complementam os hooks de
> `.claude/settings.json` (que bloqueiam mecanicamente): aqui esta o que fazer
> quando um hook bloqueia, e os casos delicados que **nao** geram bloqueio.

---

## Quando um hook bloquear uma acao

Regra **sem excecao**. Ao receber um bloqueio de hook (Gitflow):

1. **Pare imediatamente.** Nao tente de novo sozinho.
2. **Explique na conversa, em linguagem simples:** o que ia fazer, por que foi
   bloqueado, e como propoe seguir.
3. **Nao** arme o token de bypass (`node .claude/hooks/gitflow-bypass.js
   "<motivo>"`) sem o usuario confirmar antes. O token e de uso unico e expira em
   15 min.
4. **Nao** reformule a acao so para escapar do bloqueio sem resolver o motivo real.

O bloqueio e um ponto de parada para decidir juntos o proximo passo — nao um
obstaculo tecnico para contornar.

---

## Quando parar e conversar sem bloqueio tecnico

- **Antes de qualquer operacao que mexe no repositorio remoto ou em producao:**
  renomear/apagar branch remota, mudar o default branch no GitHub, force-push,
  mexer em configuracao da Vercel, trocar dominio. Descreva o comando exato e
  confirme.
- **Mudanca de identidade visual / conteudo do portfolio** (textos do CV, dados
  de contato, projetos exibidos, paleta, tipografia) — confirme o texto/valor
  final antes de aplicar; sao coisas que representam o usuario publicamente.
- **Adicionar dependencia nova** — diga qual, por que, e o peso que adiciona ao
  bundle, antes de instalar.
- **Ao terminar uma mudanca arriscada ou pouco obvia** (mesmo com build verde) —
  resuma em 2-3 linhas o que foi feito e por que antes de seguir.
- **Quando o pedido do usuario e ambiguo o suficiente para mudar o resultado** —
  pergunte em vez de presumir.

Fora desses gatilhos, siga em frente sem interromper a cada passo trivial — o
objetivo e conversa nos momentos que importam, nao travar o ritmo o tempo todo.

---

## Padrao de trabalho das conversas

- Toda mudanca de codigo entra pelo fluxo Gitflow (@.claude/rules/gitflow.md):
  branch de trabalho a partir de `develop`, commits Conventional, PR para
  `develop`. Nunca commitar direto em `master`/`homolog`/`develop`.
- Clean Code (@.claude/rules/clean-code.md) vale para todo arquivo tocado —
  Regra do Escoteiro inclusa.
- TDD (@.claude/rules/tdd.md) esta desligado por padrao aqui; se a tarefa trouxer
  logica de verdade (parsing, calculo, integracao), proponha ativar e escrever o
  teste antes.
- `npm run lint` e `npm run build` verdes antes de considerar uma mudanca pronta.
