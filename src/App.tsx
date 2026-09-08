import { useQuiz } from './hooks/useQuiz';
import { getSubject } from './data/subjects';
import { HomeScreen } from './components/HomeScreen';
import { SubjectScreen } from './components/SubjectScreen';
import { StartScreen } from './components/StartScreen';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { ResultScreen } from './components/ResultScreen';
import { ThemeToggle } from './components/ThemeToggle';

export default function App() {
  const quiz = useQuiz();

  return (
    <div className="min-h-screen">
      <header className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
          <button type="button" onClick={quiz.goHome} className="text-left">
            <h1 className="text-base font-semibold sm:text-lg">Plataforma de Estudos</h1>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Plataforma de estudo para fixação
            </p>
          </button>
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6 sm:py-10">
        {quiz.view === 'home' && (
          <HomeScreen
            hasSavedSession={quiz.hasSavedSession}
            savedProgress={quiz.savedProgress}
            onOpenLegado={quiz.openLegado}
            onResume={quiz.resume}
            onSelectMode={(subjectId, mode) => {
              if (subjectId === 'evangelismo' && mode === 'fixacao') quiz.openEvangelismo();
            }}
          />
        )}

        {quiz.view === 'evangelismo' && getSubject('evangelismo') && (
          <SubjectScreen subject={getSubject('evangelismo')!} onBack={quiz.goHome} />
        )}

        {quiz.view === 'start' && (
          <StartScreen
            hasSavedSession={quiz.hasSavedSession}
            savedProgress={quiz.savedProgress}
            onStart={quiz.start}
            onResume={quiz.resume}
            onBack={quiz.goHome}
          />
        )}

        {quiz.view === 'quiz' && quiz.currentQuestion && (
          <div className="space-y-6">
            <ProgressBar current={quiz.currentNumber} total={quiz.total} />
            <QuestionCard
              key={quiz.currentQuestion.id}
              question={quiz.currentQuestion}
              answer={quiz.currentAnswer}
              isLast={quiz.isLast}
              onRevealHint={quiz.revealHint}
              onSubmitMultipla={quiz.submitMultipla}
              onSubmitVf={quiz.submitVf}
              onSubmitDiscursiva={quiz.submitDiscursiva}
              onSetSelfAssessment={quiz.setSelfAssessment}
              onToggleKeyPoint={quiz.toggleKeyPoint}
              onNext={quiz.goNext}
            />
          </div>
        )}

        {quiz.view === 'result' && (
          <ResultScreen
            results={quiz.results}
            wrongCount={quiz.wrongCount}
            onRedoAll={quiz.restartAll}
            onRedoWrong={quiz.restartWrongOnly}
            onBackToStart={quiz.goHome}
          />
        )}
      </main>
    </div>
  );
}
