import { AnimatePresence, motion } from 'framer-motion'
import { QUESTIONS } from '../data/questions'

type QuizScreenProps = {
  index: number
  selected: string | null
  onSelect: (option: string) => void
  onNext: () => void
}

export function QuizScreen({ index, selected, onSelect, onNext }: QuizScreenProps) {
  const question = QUESTIONS[index]
  const total = QUESTIONS.length
  const isLast = index === total - 1
  const progress = ((index + 1) / total) * 100

  return (
    <motion.section
      className="stage stage--quiz"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="quiz">
        <div className="progress">
          <p className="progress__label">
            Pergunta {index + 1} de {total}
          </p>
          <div className="progress__track" aria-hidden="true">
            <div className="progress__fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            className="card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.45 }}
          >
            <h2 className="card__question">{question.text}</h2>
            <div className="options" role="radiogroup" aria-label={question.text}>
              {question.options.map((option) => {
                const isSelected = selected === option
                return (
                  <button
                    key={option}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    className={`option ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => onSelect(option)}
                  >
                    <span className="option__box" aria-hidden="true" />
                    <span className="option__text">{option}</span>
                  </button>
                )
              })}
            </div>
            <button
              type="button"
              className="btn"
              onClick={onNext}
              disabled={!selected}
            >
              {isLast ? 'Descobrir a surpresa' : 'Próxima pergunta'}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
