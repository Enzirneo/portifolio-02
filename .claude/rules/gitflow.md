# Gitflow — portfolio (checklist de execucao)

> Adaptado do padrao de Git usado no projeto `commission-insight`. Aqui o modelo
> segue o **Gitflow classico** com uma etapa de homologacao.
>
> Parte destas regras e **bloqueada mecanicamente** por
> `.claude/hooks/pre-bash-gitflow.js` (ver secao final). Ao receber um bloqueio:
> pare e alinhe com o usuario (@.claude/rules/fluxo-de-trabalho.md).

---

## Regra de ouro

**Nunca commite nem de push direto em `master`, `homolog` ou `develop`.** Toda
mudanca entra por Pull Request a partir de uma branch de trabalho.

```
sua-branch  ──▶  develop  ──▶  homolog  ──▶  master
```

Voce cuida da primeira flecha (`sua-branch ▶ develop` via PR). As promocoes
`develop ▶ homolog` e `homolog ▶ master` sao feitas em marcos, com o projeto
verde.

## Branches permanentes

| Branch | O que e | Recebe PR de |
|---|---|---|
| `master` | Producao. O que a Vercel publica. | So de `homolog` |
| `homolog` | Homologacao / staging. Valida antes de subir. | So de `develop` |
| `develop` | Integracao. Onde o trabalho se junta. | Da sua branch de trabalho |

> A branch de producao foi renomeada de `main` para `master` para seguir a
> nomenclatura do Gitflow classico.

## Nome da sua branch

Formato **obrigatorio**: `tipo/<descricao-kebab>`

- `<descricao>` — kebab-case: so letras minusculas, numeros e hifens. Sem acento,
  sem espaco, sem maiuscula. Curta e descritiva.
- Nao ha ID de task (o repo nao usa issue tracker com numeracao).
- Exemplos validos: `feature/secao-depoimentos`, `fix/og-image-quebrada`,
  `chore/atualiza-deps`, `refactor/navbar-sem-dark-mode`, `docs/readme-docker`.

| Tipo | Quando usar | Abre a partir de | PR para |
|---|---|---|---|
| `feature/`  | Secao/funcionalidade nova | `develop` | `develop` |
| `fix/`      | Correcao de bug | `develop` | `develop` |
| `chore/`    | Deps, config, tooling, limpeza | `develop` | `develop` |
| `refactor/` | Melhorar codigo sem mudar comportamento | `develop` | `develop` |
| `docs/`     | Documentacao | `develop` | `develop` |
| `hotfix/`   | Urgencia em producao | `master` | `master` (e depois `develop`) |

Regras:
- Uma branch por assunto. Nunca dois assuntos na mesma branch.
- Sempre abra a partir de `develop` **atualizado**
  (`git checkout develop && git pull origin develop`).
- Apague a branch depois do merge (`git branch -d <branch>`).

## Passo a passo

1. `git checkout develop && git pull origin develop`.
2. `git checkout -b feature/descricao-curta`.
3. Trabalhe em commits pequenos (Conventional Commits, abaixo).
4. `npm run lint` e `npm run build` verdes antes de pedir revisao.
5. `git push -u origin feature/descricao-curta`.
6. Abra o PR: **base = `develop`** (nunca `master`/`homolog`, exceto `hotfix/`).
7. Depois do merge: `git checkout develop && git pull && git branch -d <branch>`.

## Promocao para producao

- `develop ▶ homolog`: PR quando um conjunto de mudancas esta pronto para validar.
- `homolog ▶ master`: PR de release, depois de homologado. A Vercel publica `master`.
- `hotfix/*`: sai de `master`, PR de volta para `master`, e replicado em `develop`.

## Mensagem de commit — Conventional Commits

```
<tipo>(<escopo>): <descricao no imperativo, ate 72 caracteres>

[corpo opcional — explique o POR QUE, nao o QUE]
```

Tipos: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`,
`style`, `revert`. Imperativo ("adiciona", nao "adicionado").

Exemplos: `feat(hero): adiciona badge de disponibilidade` ·
`fix(seo): corrige og-image inexistente` · `chore(deps): remove libs sem uso`.

## Erros comuns (nao faca)

Abrir PR direto para `master` · `git push origin develop` direto · branch
`minhas-alteracoes` (falta `tipo/`) · commit `"ajustes"` · dois assuntos na mesma
branch · commitar `.env` ou segredo · abrir PR sem rodar `lint` + `build`.

---

## O que e bloqueado por hook (`pre-bash-gitflow.js`)

| Regra | Bloqueio |
|---|---|
| `git commit` com a branch atual em `master`, `main`, `homolog` ou `develop` | exit 2 |
| Criar branch cujo nome **nao** casa `^(feature\|fix\|chore\|refactor\|docs\|hotfix)/[a-z0-9][a-z0-9-]*$` | exit 2 |
| `gh pr create` com `--base master`/`main`/`homolog` a partir de branch que nao e `hotfix/` | exit 2 |

Excecao pontual — **token de arquivo de uso unico e com validade**:

```
node .claude/hooks/gitflow-bypass.js "<motivo>" [--uses N] [--minutes M]
```

Cria `.claude/gitflow-bypass.json` (padrao: 1 uso, expira em 15 min). Cada comando
git/gh que **seria bloqueado** consome 1 uso; ao zerar ou expirar, o token se
apaga sozinho. **Confirme com o usuario antes de armar.**

Nao e silencioso: cada comando sob bypass emite um banner; o hook `Stop` lembra
ao fim da resposta; um `git commit` com token armado dispara um aviso.

**Nao e bloqueado por hook (depende de seguir esta regra):** abrir a branch a
partir de `develop` atualizado; PR com base `develop`; rodar `lint`/`build` antes
do PR; mensagem no padrao Conventional Commits; apagar a branch apos o merge.
