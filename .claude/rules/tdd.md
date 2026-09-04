# TDD — regras de execucao

> Destilado de *Test-Driven Development by Example* (Kent Beck). Trazido do setup
> de governanca de outro projeto.
>
> **Neste portfolio o enforcement de TDD vem DESLIGADO.** O projeto e quase todo
> componente visual + animacao GSAP, onde TDD rende pouco. As regras ficam aqui
> como referencia e os hooks ficam no repo prontos para um projeto com mais
> logica (ex: um backend). Ver "Como ativar" no fim.

---

## Por que TDD

TDD e uma forma de **gerenciar o medo** com **feedback rapido e confiavel em
passos pequenos**. Os testes sao os dentes de uma catraca — teste que passou,
passou para sempre. E um processo de direcao: tudo tranquilo → passos maiores;
trecho complicado → passos minusculos.

## As 3 leis do TDD

1. Nao escreva **nenhum** codigo de producao antes de ter um teste que falha.
2. Nao escreva **mais teste** do que o suficiente para falhar (nao compilar ja e falhar).
3. Nao escreva **mais codigo de producao** do que o suficiente para o teste passar.

## O ciclo: Red → Green → Refactor

Cada fase otimiza uma coisa diferente — **nunca as duas ao mesmo tempo**.

- **🔴 Red** — "qual deveria ser a API? como eu gostaria de usar isso?" Escreva o
  **menor** teste que ainda nao passa (comece pelo `assert`). Rode. Tem que
  falhar **pelo motivo certo** (a assercao de comportamento, "esperava X, veio
  Y") — nao por `ImportError`/`SyntaxError`.
- **🟢 Green** — "como faco passar o mais rapido possivel?" Vale gambiarra.
  Travou > ~2 min → **Fake It** (devolva a constante esperada, depois generalize)
  ou **Triangulacao** (so generalize com 2+ exemplos). **Implementacao obvia** so
  quando a solucao real e trivial e voce tem certeza.
- **🔵 Refactor** — "como removo a duplicacao sem mudar o comportamento?" Etapa
  **separada**. Nunca refatore com teste vermelho. Alvo nº 1: duplicacao —
  inclusive entre teste e codigo. Rode os testes depois de cada movimento.

## Praticas essenciais

- **Test List:** antes de comecar, anote todos os testes que voce sabe que vai
  precisar. Ataque um por vez; adicione o que descobrir. A sessao acaba quando a
  lista zera.
- **Isolated Test:** zero dependencia entre testes; ordem nao importa; cada teste
  monta e desmonta o proprio mundo.
- **Test-First** e **Assert First**.
- **Test Data:** dados que tornam o teste **facil de ler**, nao "realistas".
- **Regression Test:** todo bug reportado vira **primeiro** o menor teste que o
  reproduz (falha), depois o conserto (passa).
- **Mock Object:** recurso caro/externo (rede, API) → versao falsa que devolve
  respostas fixas, passada como parametro (nao global/singleton).

## F.I.R.S.T.

Fast · Independent · Repeatable · Self-validating · Timely.

---

## Aplicacao neste repo (quando/se ativado)

- **Runner:** Vitest + `@testing-library/react`. Teste em `<arquivo>.test.ts[x]`
  ao lado do codigo, ou `__tests__/`.
- **Escopo do enforcement:** SO logica pura — `src/shared/lib`, `src/shared/data`,
  hooks (`**/hooks/**`, `use*.ts`). Componentes `.tsx` de UI ficam de fora
  (`isPureLogic` em `.claude/hooks/lib.js`).
- **Ordem:** logica pura (helpers, calculos, formatacao, reducers, i18n) primeiro.
  Componente: assercao de **comportamento visivel**, nao de implementacao.

## Como ativar

1. Instalar o runner:
   ```
   npm i -D vitest @testing-library/react @testing-library/jest-dom jsdom @vitejs/plugin-react
   ```
   criar `vitest.config.ts` e o script `"test": "vitest"` em `package.json`.
2. Em `.claude/settings.json`, mover os dois blocos de dentro de
   `"$disabled_tdd"` para `hooks.PreToolUse` e `hooks.PostToolUse`
   (matcher `"Edit|Write"`), e adicionar `pre-edit-tdd.js` ao array PreToolUse.
3. (Opcional) ampliar o escopo editando `isPureLogic` em `.claude/hooks/lib.js`.

Com o hook ativo, a excecao pontual e um token de arquivo:
```
node .claude/hooks/tdd-bypass.js "<motivo>" [--uses N] [--minutes M]
```
Padrao: 1 uso, 15 min. **Confirme com o usuario antes de armar.**
