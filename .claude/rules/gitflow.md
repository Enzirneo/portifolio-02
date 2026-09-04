# Gitflow — portfolio (checklist de execucao)

> Adaptado do padrao de Git usado no projeto `commission-insight`. Aqui o modelo
> segue o **Gitflow classico** com uma etapa de homologacao.
>
> Parte destas regras e **bloqueada mecanicamente** por
> `.claude/hooks/pre-bash-gitflow.js` (ver secao final). Ao receber um bloqueio:
> pare e alinhe com o usuario (@.claude/rules/fluxo-de-trabalho.md).

---

## Regra de ouro

**Nunca commite direto em `master`, `homolog` ou `develop`.** Todo trabalho
acontece numa branch de trabalho.

```
sua-branch  ──(merge direto)──▶  develop  ──(PR)──▶  homolog  ──(PR)──▶  master
```

- **`sua-branch ▶ develop`**: `git merge` direto (sem PR). O repo e solo; PR aqui
  so seria cerimonia.
- **`develop ▶ homolog`** e **`homolog ▶ master`**: por **Pull Request**, em
  marcos, com o projeto verde. Sao os pontos de conferencia que importam.

## Branches permanentes

| Branch | O que e | Como recebe |
|---|---|---|
| `master` | Producao. O que a Vercel publica. | PR de `homolog` |
| `homolog` | Homologacao / staging. Valida antes de subir. | PR de `develop` |
| `develop` | Integracao. Onde o trabalho se junta. | merge direto da sua branch |

> A branch de producao foi renomeada de `main` para `master` para seguir a
> nomenclatura do Gitflow classico.

## Nome da sua branch

Formato **obrigatorio**: `tipo/<descricao-kebab>`

- `<descricao>` — kebab-case: so letras minusculas, numeros e hifens. Sem acento,
  sem espaco, sem maiuscula. Curta e descritiva.
- Nao ha ID de task (o repo nao usa issue tracker com numeracao).
- Exemplos validos: `feature/secao-depoimentos`, `fix/og-image-quebrada`,
  `chore/atualiza-deps`, `refactor/navbar-sem-dark-mode`, `docs/readme-docker`.

| Tipo | Quando usar | Abre de | Entra em |
|---|---|---|---|
| `feature/`  | Secao/funcionalidade nova | `develop` | `develop` (merge direto) |
| `fix/`      | Correcao de bug | `develop` | `develop` (merge direto) |
| `chore/`    | Deps, config, tooling, limpeza | `develop` | `develop` (merge direto) |
| `refactor/` | Melhorar codigo sem mudar comportamento | `develop` | `develop` (merge direto) |
| `docs/`     | Documentacao | `develop` | `develop` (merge direto) |
| `hotfix/`   | Urgencia em producao | `master` | PR para `master` (e replica em `develop`/`homolog`) |

Regras:
- Uma branch por assunto. Nunca dois assuntos na mesma branch.
- Sempre abra a partir de `develop` **atualizado**
  (`git checkout develop && git pull origin develop`).
- Apague a branch depois do merge (`git branch -d <branch>` local + remoto).

## Passo a passo (trabalho -> develop)

1. `git checkout develop && git pull origin develop`.
2. `git checkout -b feature/descricao-curta`.
3. Trabalhe em commits pequenos (Conventional Commits, abaixo).
4. `npm run lint` e `npm run build` verdes.
5. `git push -u origin feature/descricao-curta` (opcional — util para o preview
   da Vercel, mas nao obrigatorio).
6. Merge em develop:
   ```
   git checkout develop && git pull origin develop
   git merge --no-ff feature/descricao-curta
   git push origin develop
   ```
7. Limpa: `git branch -d feature/descricao-curta` e
   `git push origin --delete feature/descricao-curta`.

## Promocao para producao (por PR)

- **`develop ▶ homolog`**: abra PR (base `homolog`, a partir de `develop`) quando
  um conjunto de mudancas esta pronto para validar. Revise o preview de homolog.
- **`homolog ▶ master`**: PR de release (base `master`, a partir de `homolog`),
  depois de homologado. A Vercel publica `master`.
- **`hotfix/*`**: sai de `master`, PR de volta para `master`, e replicado em
  `develop` e `homolog`.

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

`git commit` direto em `develop`/`homolog`/`master` · promover `develop` para
`master` pulando `homolog` · branch `minhas-alteracoes` (falta `tipo/`) · commit
`"ajustes"` · dois assuntos na mesma branch · commitar `.env` ou segredo · merge
em `develop` sem rodar `lint` + `build`.

---

## O que e bloqueado por hook (`pre-bash-gitflow.js`)

| Regra | Bloqueio |
|---|---|
| `git commit` com a branch atual em `master`, `main`, `homolog` ou `develop` | exit 2 |
| Criar branch cujo nome **nao** casa `^(feature\|fix\|chore\|refactor\|docs\|hotfix)/[a-z0-9][a-z0-9-]*$` | exit 2 |
| `gh pr create --base homolog` a partir de branch que nao e `develop` (nem `hotfix/`) | exit 2 |
| `gh pr create --base master`/`main` a partir de branch que nao e `homolog` (nem `hotfix/`) | exit 2 |

O merge `sua-branch ▶ develop` **nao** e bloqueado (o hook so barra `git commit`,
nao `git merge`/`git push`).

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
partir de `develop` atualizado; usar `--no-ff` no merge para develop; rodar
`lint`/`build` antes do merge; mensagem no padrao Conventional Commits; apagar a
branch (local + remoto) apos o merge; passar por `homolog` antes de `master`.
