import { AnimatePresence } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import { BackgroundVideo } from './components/BackgroundVideo'
import { FloatingParticles } from './components/FloatingParticles'
import { MusicControl } from './components/MusicControl'
import { QuizScreen } from './components/QuizScreen'
import { RevealScreen } from './components/RevealScreen'
import { SuspenseScreen } from './components/SuspenseScreen'
import { WelcomeScreen } from './components/WelcomeScreen'
import { QUESTIONS } from './data/questions'
import { mediaFileExists } from './lib/media'

type Stage = 'welcome' | 'quiz' | 'suspense' | 'reveal'

function App() {
  const [stage, setStage] = useState<Stage>('welcome')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [answers, setAnswers] = useState<string[]>([])
  const [musicOn, setMusicOn] = useState(false)
  const [musicAvailable, setMusicAvailable] = useState(false)
  const [sparkle, setSparkle] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const wantsMusic = useRef(false)

  useEffect(() => {
    mediaFileExists('/musica.mp3', 'audio').then(setMusicAvailable)
  }, [])

  useEffect(() => {
    const theme = document.querySelector('meta[name="theme-color"]')
    if (theme) {
      theme.setAttribute('content', stage === 'reveal' ? '#ffb7d5' : '#d8d8d8')
    }
  }, [stage])

  const playMusic = useCallback(() => {
    wantsMusic.current = true
    const audio = audioRef.current
    if (!audio || !musicAvailable) return
    audio.volume = 0.18
    audio
      .play()
      .then(() => setMusicOn(true))
      .catch(() => {})
  }, [musicAvailable])

  useEffect(() => {
    if (musicAvailable && wantsMusic.current) playMusic()
  }, [musicAvailable, playMusic])

  const handleStart = () => {
    playMusic()
    setStage('quiz')
  }

  const handleNextQuestion = () => {
    if (!selected) return
    const nextAnswers = [...answers, selected]
    setAnswers(nextAnswers)

    if (questionIndex >= QUESTIONS.length - 1) {
      setStage('suspense')
      return
    }

    setQuestionIndex((current) => current + 1)
    setSelected(null)
  }

  const handleReveal = () => {
    setSparkle(true)
    setStage('reveal')
    window.setTimeout(() => setSparkle(false), 4200)
  }

  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio || !musicAvailable) return
    if (musicOn) {
      wantsMusic.current = false
      audio.pause()
      setMusicOn(false)
      return
    }
    playMusic()
  }

  return (
    <div className={`app app--${stage}`}>
      <BackgroundVideo variant={stage === 'reveal' ? 'reveal' : 'default'} />
      <FloatingParticles intensity={stage === 'reveal' ? 'high' : 'low'} />
      {musicAvailable && (
        <audio
          ref={audioRef}
          src="/musica.mp3"
          loop
          preload="auto"
          onError={() => setMusicAvailable(false)}
        />
      )}
      <MusicControl enabled={musicOn} available={musicAvailable} onToggle={toggleMusic} />

      <main className="app__main">
        <AnimatePresence mode="wait">
          {stage === 'welcome' && (
            <WelcomeScreen key="welcome" onStart={handleStart} />
          )}
          {stage === 'quiz' && (
            <QuizScreen
              key="quiz"
              index={questionIndex}
              selected={selected}
              onSelect={setSelected}
              onNext={handleNextQuestion}
            />
          )}
          {stage === 'suspense' && (
            <SuspenseScreen key="suspense" onReveal={handleReveal} />
          )}
          {stage === 'reveal' && <RevealScreen key="reveal" sparkle={sparkle} />}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App
