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
(o conteúdo da aula, hoje uma página em `public/conteudo/`).

- Ao **atingir 60% ou mais**, a tela de resultado libera o link do material e lista, para
  cada assunto errado, onde revisar (mapa em `part.studyMap`). Um marcador fica salvo em
  `gms:unlocked:{subjectId}:fixacao:{partId}`, e o link do material passa a aparecer também
  na lista de partes.
- **Abaixo de 60%**, a tela apenas mostra a pontuação, os assuntos a focar e um botão para
  responder de novo. O material não é liberado.

O material de Evangelismo, Aula 01, Parte 01 está em
`public/conteudo/evangelismo-aula-01-parte-01.html` (reprodução da revisão em anexo, com as
seções 01 a 09). Para servir o PDF original no lugar, coloque o arquivo em `public/conteudo/`
e aponte `material.url` para ele em `src/data/subjects.ts`.

### Como adicionar um novo assunto

1. Crie o banco em `src/data/questions-<assunto>.ts`, exportando um `Question[]`.
   Cada questão leva `subject: '<assunto>'` (sem o campo `area`, que é só do banco legado).
2. Adicione o id em `SubjectId` (`src/types.ts`).
3. Registre o assunto em `src/data/subjects.ts`, com `kind: 'modular'` e uma ou mais
   `fixacaoParts` (cada parte com `id`, `lesson`, `title` e as `questions` daquela aula).
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
    questions-evangelismo.ts   banco do assunto Evangelismo
public/
  conteudo/                    material das aulas liberado ao atingir a nota mínima
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
```
