<h1 align="center">Enzo Bispo • Portfolio</h1>

<p align="center">
  <strong>Full Stack Developer • Software Architecture • UI/UX</strong>
</p>

<p align="center">
  Portfólio pessoal — moderno, interativo e performático, com foco em experiência
  do usuário, animações suaves e arquitetura organizada por domínio.
</p>

---

## 🛠️ Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **GSAP** — animações e scroll-triggered reveals
- **Lenis** — smooth scroll (desativado em toque / `prefers-reduced-motion`)
- **cobe** — globo interativo na seção "Sobre"
- **react-github-calendar** — heatmap de contribuições
- **@vercel/analytics**

Internacionalização própria (pt-BR / en) via Context + cookie, sem biblioteca.

---

## 🚀 Rodando localmente

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script | Descrição |
|---|---|
| `npm run dev` | Dev server (Webpack) |
| `npm run dev:turbo` | Dev server (Turbopack) |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção |
| `npm run lint` | ESLint |

---

## 🐳 Docker

O projeto gera um build `standalone` e roda em container sem nenhuma variável de
ambiente obrigatória. A Vercel ignora os arquivos de Docker e continua usando o
pipeline próprio dela.

```bash
docker compose up --build          # http://localhost:3000
# ou
docker build -t portfolio . && docker run -p 3000:3000 portfolio
```

---

## 📁 Estrutura

```
src/
├── app/                  # Rotas (App Router), layout, metadata, sitemap/robots,
│   │                     # opengraph-image, rota /cv e endpoint /cv/ats
│   └── globals.css
├── features/             # Domínios da UI
│   ├── home/components/  # Seções da landing (Hero, About, Projects, Skills, …)
│   └── cv/               # Conteúdo estruturado do currículo
└── shared/
    ├── components/       # icons, layout (Navbar, Footer, SmoothScroll), ui
    ├── data/             # projects, skills
    ├── i18n/             # LanguageProvider
    └── lib/              # i18n, site, utils
```
