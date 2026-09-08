# Plataforma de Estudos

Aplicação web de estudos por assunto. React + Vite + TypeScript, Tailwind CSS, 100% frontend.
O progresso é salvo em `localStorage`, sem backend.

## Assuntos

A tela inicial mostra uma grade de cards, um por assunto (`src/data/subjects.ts`).

Há dois formatos de assunto:

- **Legado** (`kind: 'legado'`): o banco atual de História da Igreja e Apologética
  (`src/data/questions.ts`, 40 questões). O card abre direto a tela de filtros
  (tipo de questão, quantidade, ordem) e roda como antes.
- **Modular** (`kind: 'modular'`): assuntos novos, como Evangelismo. O card tem dois modos:
  - **Questões de fixação**: uma lista de partes (ex.: "Aula 01, Parte 01"). Cada parte
    roda em ordem sequencial, com "Ver dica" e correção logo após cada resposta.
    O progresso de cada parte é retomável.
  - **Prova simulada**: avaliação embaralhada, sem dicas, com resultado só no final.
    Fica como "Em breve" até existir um banco dedicado (`simulado.status`).

### Nota mínima e material da aula

Cada parte de fixação tem um `passRatio` (padrão `0.6`, ou seja 60%) e um `material`
(o PDF da aula, servido da raiz do site).

- Ao **atingir 60% ou mais**, a tela de resultado libera o botão de download do PDF e lista,
  para cada assunto errado, onde revisar (mapa em `part.studyMap`). Um marcador fica salvo em
  `gms:unlocked:{subjectId}:fixacao:{partId}`, e o botão de download passa a aparecer também
  na lista de partes.
- **Abaixo de 60%**, a tela apenas mostra a pontuação, os assuntos a focar e um botão para
  responder de novo. O material não é liberado.

Os PDFs ficam em `public/` (copiados para a raiz de `dist/` no build) e o link usa `download`:

- `public/evangelismo-aula-01-parte-01.pdf` -> `material.url: '/evangelismo-aula-01-parte-01.pdf'`
- `public/hermeneutica-aula-02.pdf` -> `material.url: '/hermeneutica-aula-02.pdf'`

Para trocar um material, substitua o arquivo em `public/` mantendo o nome, ou aponte
`material.url` para o novo arquivo em `src/data/subjects.ts`. O `studyMap` de cada parte
aponta o tópico de cada questão para a seção correspondente do PDF.

O assunto `evangelismo` reúne as duas aulas ("Evangelismo e Hermenêutica") como duas
`fixacaoParts` do mesmo card. A prova simulada segue "Em breve"; as questões marcadas apenas
com `sets: ['simulado']` já estão no banco (`src/data/questions-hermeneutica.ts`), aguardando
esse modo.

### Como adicionar um novo assunto

1. Crie o banco em `src/data/questions-<assunto>.ts`, exportando um `Question[]`.
   Cada questão leva `subject: '<assunto>'` (sem o campo `area`, que é só do banco legado) e,
   se o assunto tiver prova, `sets: ('fixacao' | 'simulado')[]`.
2. Adicione o id em `SubjectId` (`src/types.ts`).
3. Registre o assunto em `src/data/subjects.ts`, com `kind: 'modular'` e uma ou mais
   `fixacaoParts` (cada parte com `id`, `lesson`, `title`, `questions`, e opcionalmente
   `passRatio`, `material` e `studyMap`). Para adicionar outra aula a um assunto existente,
   basta acrescentar uma `FixacaoPart` ao array.
4. Ligue o novo id no `onSelectMode` do `HomeScreen` em `src/App.tsx`
   (hoje só `evangelismo` + `fixacao` está ligado).

### Chaves de `localStorage`

```
gms:progress:{subjectId}:fixacao:{partId}   progresso de uma parte de fixação
gms:unlocked:{subjectId}:fixacao:{partId}   parte concluída com 60% ou mais (material liberado)
simulado-gms:session                        sessão do assunto legado
simulado-gms:theme                          tema claro/escuro
```

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
  data/
    subjects.ts                registro dos assuntos, partes de fixação, nota mínima e material
    questions.ts               banco legado (História da Igreja + Apologética)
    questions-evangelismo.ts   banco da Aula 01 (Evangelismo)
    questions-hermeneutica.ts  banco da Aula 02 (Hermenêutica), com o campo sets
  types.ts                     modelo de dados
  lib/format.ts                rótulos e formatação
  hooks/
    useQuiz.ts                 estado do assunto legado + navegação de telas
    useFixacao.ts              estado de uma rodada de fixação (parte modular)
    useLocalStorage.ts         persistência genérica
  components/
    HomeScreen.tsx             grade de cards por assunto
    SubjectScreen.tsx          tela de um assunto modular (partes + prova)
    FixacaoResult.tsx          resumo leve ao fim de uma parte de fixação
    StartScreen.tsx            filtros do assunto legado
    QuestionCard.tsx
    MultipleChoice.tsx
    TrueFalse.tsx
    OpenAnswer.tsx
    Feedback.tsx
    ProgressBar.tsx
    ResultScreen.tsx           resultado completo do assunto legado
    ThemeToggle.tsx
  App.tsx
public/*.pdf                   PDFs das aulas, liberados ao atingir a nota mínima
```
