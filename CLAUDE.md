# Portfolio — Enzo Bispo

Portfolio pessoal. **Next.js 16** (App Router) + **React 19** + **TypeScript** +
**Tailwind CSS 4**. App unico em `src/`, sem backend. Deploy na **Vercel**
(branch `master`); tambem roda em Docker (`output: standalone`).

## Comandos essenciais

| | Comando |
|---|---|
| Dev | `npm run dev` (Webpack) · `npm run dev:turbo` (Turbopack) |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Docker | `docker compose up --build` |

Nao ha suite de testes (ver "TDD" abaixo).

## Estrutura

```
src/
├── app/            # rotas, layout, metadata, sitemap/robots, opengraph-image,
│   │               # /cv e endpoint /cv/ats
│   └── globals.css
├── features/
│   ├── home/components/   # secoes da landing (Hero, About, Projects, Skills, …)
│   └── cv/                # conteudo estruturado do curriculo
└── shared/
    ├── components/  # icons, layout (Navbar, Footer, SmoothScroll), ui
    ├── data/        # projects, skills
    ├── i18n/        # LanguageProvider (pt-BR / en via cookie)
    └── lib/         # i18n, site (SITE_URL), utils (cn)
```

## Antes de qualquer alteracao — ordem obrigatoria

Vale para **toda** tarefa (bug, feature, refactor, ajuste de conteudo):

1. Identifique a secao/rota afetada em `src/features` ou `src/app`.
2. Aplique as regras de execucao:
   - @.claude/rules/clean-code.md
   - @.claude/rules/gitflow.md
   - @.claude/rules/tdd.md
   - @.claude/rules/fluxo-de-trabalho.md
3. Trabalhe numa branch `tipo/<descricao-kebab>` a partir de `develop`. **Nunca**
   commite direto em `master`, `homolog` ou `develop`.
4. `npm run lint` + `npm run build` verdes antes de abrir o PR (base = `develop`).

## Gitflow (resumo)

```
sua-branch  ──▶  develop  ──▶  homolog  ──▶  master (producao / Vercel)
```

Branches permanentes protegidas por hook: `master`, `homolog`, `develop`.
Branch de trabalho: `feature|fix|chore|refactor|docs/<descricao-kebab>` (sem ID).
`hotfix/` sai de `master`. Detalhes: @.claude/rules/gitflow.md.

## Enforcement mecanico (hooks)

`.claude/settings.json` liga **um** hook: `pre-bash-gitflow.js` bloqueia (exit 2)
commit em branch permanente, branch fora do padrao, e PR de feature com base
`master`/`homolog`. **Ao receber um bloqueio, pare e converse**
(@.claude/rules/fluxo-de-trabalho.md).

O enforcement de **TDD vem desligado** (projeto quase todo UI). Os hooks
`pre-edit-tdd.js` / `post-edit-verify.js` estao no repo prontos para ativar num
projeto com mais logica — ver @.claude/rules/tdd.md secao "Como ativar". Clean
Code e a ordem do ciclo red-green-refactor **nao** sao bloqueaveis por script —
dependem das regras.

## SEO / metadata

`src/app/layout.tsx` gera metadata por idioma; `SITE_URL` centralizado em
`src/shared/lib/site.ts`; card OpenGraph gerado em `src/app/opengraph-image.tsx`.
Ao mudar dominio, ajuste `SITE_URL`.
