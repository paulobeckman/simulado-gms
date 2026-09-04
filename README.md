# Simulado GMS - História da Igreja e Apologética

Aplicação web de simulado de estudos. React + Vite + TypeScript, Tailwind CSS, 100% frontend.
O banco de 40 questões fica em `src/data/questions.ts` e o progresso é salvo em `localStorage`.

## Requisitos

- Node.js 18 ou superior

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Abre o servidor local do Vite (por padrão em `http://localhost:5173`).

## Build

```bash
npm run build
```

Gera a versão estática em `dist/`. Para conferir localmente:

```bash
npm run preview
```

## Deploy estático

O conteúdo de `dist/` pode ser publicado em qualquer hospedagem de sites estáticos
(Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.).

Configuração típica:

- Comando de build: `npm run build`
- Diretório de publicação: `dist`

O arquivo `public/_redirects` já contém a regra de SPA (`/* /index.html 200`),
usada por Netlify e Cloudflare Pages para que todas as rotas caiam no `index.html`.
Em outras plataformas, configure um fallback equivalente para `index.html`.

## Estrutura

```
src/
  data/questions.ts      banco fixo de questões
  types.ts               modelo de dados
  lib/format.ts          rótulos e formatação
  hooks/
    useQuiz.ts           estado do simulado (índice, respostas, dicas, resultado)
    useLocalStorage.ts   persistência genérica
  components/
    StartScreen.tsx
    QuestionCard.tsx
    MultipleChoice.tsx
    TrueFalse.tsx
    OpenAnswer.tsx
    Feedback.tsx
    ProgressBar.tsx
    ResultScreen.tsx
    ThemeToggle.tsx
  App.tsx
```
