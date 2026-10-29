import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type SuspenseScreenProps = {
  onReveal: () => void
}

export function SuspenseScreen({ onReveal }: SuspenseScreenProps) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 4200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <motion.section
      className="stage stage--suspense"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="panel panel--narrow">
        <div className="pulse" aria-hidden="true" />
        <p className="kicker">Um instante de silêncio</p>
        <h2 className="headline headline--small">
          Você acaba de confirmar uma coisa muito importante...
        </h2>
        <p className="lede">
          Essa pessoinha já tem muita sorte de ter alguém como você por perto.
        </p>

        <AnimatePresence>
          {ready && (
            <motion.div
              className="suspense-cta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="lede lede--gold">
                Prepare o coração... chegou a hora de conhecer alguém muito especial!
              </p>
              <button type="button" className="btn" onClick={onReveal}>
                Revelar a surpresa
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}
