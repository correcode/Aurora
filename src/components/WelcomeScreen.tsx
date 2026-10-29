import { motion } from 'framer-motion'

type WelcomeScreenProps = {
  onStart: () => void
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.section
      className="stage stage--welcome"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="panel">
        <p className="kicker">Uma história está prestes a começar</p>
        <h1 className="headline">
          Tem uma surpresa muito especial esperando por você...
        </h1>
        <p className="lede">
          Antes de descobrir essa novidade, queremos te convidar para participar
          de uma pequena brincadeira. Afinal, você faz parte dessa história!
        </p>
        <button type="button" className="btn" onClick={onStart}>
          Começar essa surpresa ♡
        </button>
      </div>
    </motion.section>
  )
}
