<h1 align="center">Enzo Bispo • Portfolio</h1>

<p align="center">
  <strong>Frontend Developer • Software Architecture • UI/UX</strong>
</p>

<p align="center">
  Portfólio moderno, interativo e altamente performático, com foco em experiência do usuário,
  animações suaves e arquitetura escalável.
</p>

---

## 🚀 Sobre o Projeto

Este projeto é o meu portfólio pessoal, desenvolvido para apresentar minhas habilidades,
projetos e visão como desenvolvedor.

A aplicação foi construída com foco em:

- 🧠 Experiência do usuário (UX)
- 🎨 Interface moderna e minimalista (UI)
- ⚡ Performance e fluidez
- 🧩 Arquitetura escalável e organizada

Além disso, o projeto passou por melhorias recentes como:

- Scroll suave com alta performance
- Otimização de animações
- Customização visual da scrollbar
- Melhor organização estrutural do código

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **CSS / Tailwind (ou CSS modular, dependendo do seu setup)**
- **Lenis (smooth scroll)**
- **Framer Motion (animações)**
- **Lucide Icons**

---

## ✨ Principais Funcionalidades

- 🔹 Hero interativo com animações
- 🔹 Navegação fluida entre seções
- 🔹 Scroll suave em toda a aplicação
- 🔹 Seções organizadas:
  - Sobre
  - Habilidades
  - Projetos
  - Contato
- 🔹 Página de currículo (CV)
- 🔹 Tema escuro/claro
- 🔹 Animações suaves e responsivas
- 🔹 Design focado em legibilidade e estética

---

## 📁 Estrutura do Projeto

```bash
portfolio/
├── public/                         # Arquivos estáticos servidos diretamente
│   ├── cv/                         # Currículo em arquivo para download/visualização
│   ├── fonts/                      # Fontes utilizadas no projeto
│   ├── images/                     # Imagens gerais do portfólio
│   ├── techstacks/                 # Ícones/logos de tecnologias
│   ├── enzo-bispo.svg              # Assets isolados
│   ├── file.svg
│   ├── foto_solo.jpg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/                            # Código-fonte da aplicação
│   ├── app/                        # Estrutura principal de páginas e configuração base
│   │   ├── cv/                     # Página do currículo
│   │   ├── fonts/                  # Configuração/importação de fontes no app
│   │   ├── globals.css             # Estilos globais
│   │   ├── globals.css.bak         # Backup de estilos globais
│   │   ├── layout.tsx              # Layout raiz da aplicação
│   │   ├── page.tsx                # Página inicial
│   │   ├── robots.ts               # Configuração de SEO para robots
│   │   └── sitemap.ts              # Sitemap da aplicação
│   │
│   ├── features/                   # Funcionalidades/seções organizadas por domínio
│   ├── shared/                     # Estruturas compartilhadas entre partes do projeto
│   │   ├── components/             # Componentes reutilizáveis
│   │   ├── data/                   # Dados estáticos e conteúdos estruturados
│   │   ├── i18n/                   # Internacionalização e traduções
│   │   └── lib/                    # Helpers, utilitários e integrações internas
│
├── .gitignore
└── ...