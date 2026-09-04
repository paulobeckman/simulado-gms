import type { Area, QuestionType, SelfAssessment } from '../types';

export function areaLabel(area: Area): string {
  return area === 'historia' ? 'História da Igreja' : 'Apologética';
}

export function typeLabel(type: QuestionType): string {
  if (type === 'multipla') return 'Múltipla escolha';
  if (type === 'vf') return 'Verdadeiro ou falso';
  return 'Discursiva';
}

export function selfAssessmentLabel(sa: SelfAssessment): string {
  if (sa === 'acertei') return 'Acertei';
  if (sa === 'parcial') return 'Parcial';
  return 'Errei';
}

export function formatScore(n: number): string {
  return Number.isInteger(n) ? String(n) : n.toFixed(1).replace('.', ',');
}

export function formatPercent(n: number): string {
  return `${Math.round(n)}%`;
}
