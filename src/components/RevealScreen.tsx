import { motion } from 'framer-motion'
import { STORY_PARAGRAPHS } from '../data/story'
import aurora1 from '../img/Aurora 1.png'
import aurora2 from '../img/Aurora 2.png'

type RevealScreenProps = {
  sparkle: boolean
}

const NAME = 'Aurora'

export function RevealScreen({ sparkle }: RevealScreenProps) {
  return (
    <motion.section
      className="reveal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
    >
      <div className={`reveal__hero ${sparkle ? 'is-sparkling' : ''}`}>
        <div className="glow" aria-hidden="true" />
        <motion.p
          className="reveal__label"
          initial={{ opacity: 0, letterSpacing: '0.4em' }}
          animate={{ opacity: 1, letterSpacing: '0.28em' }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          É uma menina!
        </motion.p>
        <h2 className="reveal__name" aria-label="Aurora">
          {NAME.split('').map((letter, index) => (
            <motion.span
              key={`${letter}-${index}`}
              initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.55 + index * 0.12 }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>
        <motion.p
          className="reveal__complement"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
        >
          Uma pequena menina está chegando para transformar nossas vidas e encher
          nossos dias de amor.
        </motion.p>
        <motion.p
          className="reveal__hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
        >
          Role para continuar essa história
        </motion.p>
      </div>

      <div className="story">
        <div className="story__photos" aria-hidden="true">
          <img className="story__photo" src={aurora1} alt="" />
          <img className="story__photo" src={aurora2} alt="" />
          <div className="story__photos-wash" />
        </div>

        <div className="story__content">
          {STORY_PARAGRAPHS.map((paragraph) => (
            <motion.p
              key={paragraph}
              className="story__p"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {paragraph}
            </motion.p>
          ))}
          <motion.p
            className="story__sign"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.9 }}
          >
            Com muito amor...
          </motion.p>
          <motion.p
            className="story__family"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            A família da Aurora. ♡
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}
