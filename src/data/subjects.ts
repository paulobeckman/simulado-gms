import type { Question, SubjectId } from '../types';
import { evangelismoQuestions } from './questions-evangelismo';
import { hermeneuticaFixacao } from './questions-hermeneutica';
import { hermeneuticaObservacaoQuestions } from './questions-hermeneutica-observacao';
import { hermeneuticaEstudoBiblicoQuestions } from './questions-hermeneutica-estudo-biblico';

export type SubjectStatus = 'disponivel' | 'em-breve';

/** Modo de estudo dentro de um assunto. */
export type QuizMode = 'fixacao' | 'simulado';

/**
 * Uma parte de fixação (ex.: "Aula 01, Parte 01").
 * Cada assunto pode ter várias, adicionadas aos poucos.
 */
export interface FixacaoPart {
  id: string; // usado na chave de progresso, ex.: 'aula-01-parte-01'
  lesson: string; // ex.: 'Aula 01, Parte 01'
  title: string; // resumo do conteúdo da parte
  questions: Question[];
  /** Fração mínima de acerto para liberar o conteúdo da aula. Padrão: 0.6 */
  passRatio?: number;
  /** Material de estudo liberado ao atingir o passRatio. */
  material?: { title: string; url: string };
  /** Para cada tópico de questão, onde revisar no material. */
  studyMap?: Record<string, string>;
}

export interface Subject {
  id: SubjectId;
  title: string;
  lesson?: string; // linha da aula, quando fizer sentido
  subtitle: string;
  status: SubjectStatus;
  /** Aparece no grupo "Assunto da semana" na tela inicial. Os demais vão para "Aulas passadas". */
  featured?: boolean;
  /**
   * 'legado'  -> banco atual (História da Igreja + Apologética): abre a tela de filtros já existente.
   * 'modular' -> assuntos novos: card com dois modos, "Questões de fixação" e "Prova simulada".
   */
  kind: 'legado' | 'modular';
  /** Partes de fixação (apenas para assuntos modulares). */
  fixacaoParts?: FixacaoPart[];
  /** Estado da prova simulada (apenas para assuntos modulares). */
  simulado?: {
    status: SubjectStatus;
    size: number; // quantas questões a prova sorteia quando estiver disponível
  };
}

export const modeInfo: Record<QuizMode, { label: string; description: string }> = {
  fixacao: {
    label: 'Questões de fixação',
    description: 'Pratique por aula, com dica disponível e correção logo após responder.',
  },
  simulado: {
    label: 'Prova simulada',
    description: 'Simulado de avaliação, sem dicas, com resultado só no final.',
  },
};

export const subjects: Subject[] = [
  {
    id: 'historia-apologetica',
    title: 'História da Igreja e Apologética',
    subtitle:
      'Banco com 40 questões — 20 de História da Igreja e 20 de Apologética, em múltipla escolha, verdadeiro ou falso e discursivas.',
    status: 'disponivel',
    kind: 'legado',
  },
  {
    id: 'evangelismo',
    title: 'Evangelismo e Hermenêutica',
    featured: true,
    subtitle:
      'Aula 01: o encontro em Samaria e o chamado a transbordar. Aula 02: método de estudo bíblico, observação, interpretação e aplicação. Aula 3: observação do texto, bombardeio de perguntas, estrutura e cânon. Aula 4: fases do estudo bíblico, princípios de interpretação, linguagem figurada e profecia.',
    status: 'disponivel',
    kind: 'modular',
    fixacaoParts: [
      {
        id: 'aula-01-parte-01',
        lesson: 'Aula 01, Parte 01',
        title: 'O encontro em Samaria, o chamado a transbordar e a multiplicação de vidas',
        questions: evangelismoQuestions,
        passRatio: 0.6,
        material: {
          title: 'Revisão — GMS, Aula 01, Parte 01: Evangelismo, encher para transbordar',
          url: '/evangelismo-aula-01-parte-01.pdf',
        },
        studyMap: {
          'O encontro em Samaria':
            'Seção 02 (percurso de João 4, v.4 a v.9) e Seção 03, chave 1 (Samaria)',
          'Samaria como campo missionário':
            'Seção 03, chave 1 (Samaria: o lugar que ninguém quer atravessar) e mapa mental, caixa 1',
          'Abordagem do evangelista':
            'Seção 03, chave 2 (Ganhar o coração antes de falar do erro) e Seção 06 (Roteiro prático de abordagem)',
          'A samaritana como evangelista':
            'Seção 02 (v.16 a v.30 e v.39 a v.42) e mapa mental, caixa 2',
          'Encher e transbordar':
            'Seção 03, chave 3 (Encher não é o objetivo, é a metade do caminho) e mapa mental, caixa 3',
          'Capacitação e disponibilidade':
            'Seção 03, chave 4 (Disponibilidade acima de capacitação)',
          'Fundamento bíblico':
            'Seção 05 (Versículos-chave: João 15.16 e Mateus 28.19) e mapa mental, caixa 4 (Comissão)',
          'Multiplicação e discipulado':
            'Seção 03, chave 5 (Multiplicação: doze ao redor, três bem perto) e mapa mental, caixa 5',
          'Fogo, azeite e discipulado':
            'Seção 04 (A madeira, a brasa, o carvão e o azeite)',
          'Presença e Trindade': 'Seção 04 (O sol, a luz e o calor)',
          'A presença de Deus':
            'Seção 03, chave 6 (Sem a presença, o propósito bom não basta) e Seção 05 (Êxodo 33.15)',
        },
      },
      {
        id: 'aula-02-metodo-estudo-biblico',
        lesson: 'Aula 02',
        title: 'Hermenêutica: método de estudo bíblico, observação, interpretação e aplicação',
        questions: hermeneuticaFixacao,
        passRatio: 0.6,
        material: {
          title: 'Revisão — Método de Estudo Bíblico: Observação, Interpretação e Aplicação',
          url: '/hermeneutica-aula-02.pdf',
        },
        studyMap: {
          Definições: 'Parte 1B, quadro "Hermenêutica x Exegese"',
          'Etapas do estudo bíblico':
            'Parte 2, seção 2.2 (as três grandes partes: observação, interpretação e aplicação)',
          Observação:
            'Parte 2, seção 2.1 (disciplina, perseverança e dependência) e seção 2.3',
          'Processo de observação':
            'Parte 2, seção 2.3, Número 3 (ler, bombardear com as sete perguntas, listar termos, buscar no dicionário)',
          Contexto:
            'Parte 1B (Mateus 6:33, Filipenses 4:13, Colossenses 3:15 e Efésios 5:18)',
          'Termos-chave':
            'Parte 2B (Efésios 1:7: redenção, remissão e graça; João 21: eros, fileo e ágape; o valor do dicionário bíblico)',
          'Fé e cultura':
            'Parte 1, seção 1.2 (teologia cultural x bíblica; pré e pós-tribulacionismo)',
          'Precisão':
            'Parte 2, seção 2.3, Número 2 (sigla VPP; exemplo de pontuação em Lucas 23:43)',
          'Doutrina e erro':
            'Parte 1B (Filipenses 4:13; a primeira doutrina de Satanás na tentação)',
          'Fidelidade ao texto':
            'Parte 1B (Mateus 6:33; a advertência de Apocalipse 22 sobre acrescentar ou tirar)',
          'Uso das Escrituras':
            'Parte 2B ("A Bíblia não é o livro dos grandes homens de Deus")',
        },
      },
      {
        id: 'hermeneutica-observacao-do-texto',
        lesson: 'Aula 3',
        title: 'Processo de observação, bombardeio de perguntas, estrutura do texto e cânon',
        questions: hermeneuticaObservacaoQuestions,
        passRatio: 0.6,
        material: {
          title: 'Revisão — Método de Estudo Bíblico',
          url: '/revisao-metodo-estudo-biblico2.pdf',
        },
      },
      {
        id: 'hermeneutica-estudo-biblico',
        lesson: 'Aula 4',
        title:
          'Fases do estudo bíblico, princípios de interpretação, linguagem figurada e profecia',
        questions: hermeneuticaEstudoBiblicoQuestions,
        passRatio: 0.6,
        material: {
          title: 'Revisão — Método de Estudo Bíblico',
          url: '/revisao-metodo-estudo-biblico3.pdf',
        },
      },
    ],
    // Ainda não há banco dedicado de prova; a prova simulada fica "Em breve".
    simulado: { status: 'em-breve', size: 25 },
  },
];

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}
