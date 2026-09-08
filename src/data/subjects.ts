import type { Question, SubjectId } from '../types';
import { evangelismoQuestions } from './questions-evangelismo';

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
    title: 'Evangelismo',
    lesson: 'Aula 01, Parte 01',
    subtitle:
      'O encontro em Samaria, o chamado a transbordar e a multiplicação de vidas.',
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
          url: '/conteudo/evangelismo-aula-01-parte-01.html',
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
    ],
    // Ainda não há banco dedicado de prova; a prova simulada fica "Em breve".
    simulado: { status: 'em-breve', size: 12 },
  },
];

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}
