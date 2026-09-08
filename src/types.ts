export type Area = 'historia' | 'apologetica';
export type QuestionType = 'multipla' | 'vf' | 'discursiva';

/* Identificador de assunto. O banco legado (História da Igreja + Apologética)
 * continua acessível pela tela de filtros e não precisa carregar "subject". */
export type SubjectId = 'historia-apologetica' | 'evangelismo' | 'hermeneutica';

/** Conjuntos a que uma questão pertence dentro de um assunto modular. */
export type QuestionSet = 'fixacao' | 'simulado';

export interface BaseQuestion {
  id: string;
  area?: Area; // presente apenas no banco legado
  subject?: SubjectId; // presente nos assuntos novos (ex.: "evangelismo")
  sets?: QuestionSet[]; // em quais conjuntos a questão entra (assuntos modulares)
  type: QuestionType;
  topic: string; // ex.: "Concílios e heresias"
  prompt: string;
  hint: string; // dica revelável antes de responder
  explanation: string; // explicação mostrada depois de responder
}

export interface MultiplaQuestion extends BaseQuestion {
  type: 'multipla';
  options: { id: string; text: string }[];
  correctOptionId: string;
}

export interface VfQuestion extends BaseQuestion {
  type: 'vf';
  correctAnswer: boolean;
}

export interface DiscursivaQuestion extends BaseQuestion {
  type: 'discursiva';
  modelAnswer: string; // resposta modelo
  keyPoints: string[]; // pontos que a resposta precisa conter
}

export type Question = MultiplaQuestion | VfQuestion | DiscursivaQuestion;

/* Estado do simulado (persistido em localStorage) */

export type AreaFilter = 'todas' | Area;
export type TypeFilter = 'todos' | QuestionType;
export type QuantityFilter = 10 | 20 | 'todas';
export type OrderFilter = 'sequencial' | 'embaralhada';

export interface QuizConfig {
  area: AreaFilter;
  type: TypeFilter;
  quantity: QuantityFilter;
  order: OrderFilter;
}

export type SelfAssessment = 'acertei' | 'parcial' | 'errei';

export interface AnswerState {
  questionId: string;
  hintUsed: boolean;
  submitted: boolean;
  selectedOptionId?: string;
  selectedAnswer?: boolean;
  text?: string;
  keyPointsChecked?: boolean[];
  selfAssessment?: SelfAssessment;
}

export interface QuizSession {
  status: 'quiz' | 'result';
  config: QuizConfig;
  questionIds: string[];
  currentIndex: number;
  answers: Record<string, AnswerState>;
}
