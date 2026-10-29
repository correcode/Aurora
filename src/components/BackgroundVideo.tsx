import { useEffect, useRef, useState } from 'react'
import { mediaFileExists } from '../lib/media'

type BackgroundVideoProps = {
  variant?: 'default' | 'reveal'
}

export function BackgroundVideo({ variant = 'default' }: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    mediaFileExists('/ultrassom.mp4', 'video').then((exists) => {
      if (active && exists) setVideoSrc('/ultrassom.mp4')
    })
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !videoSrc) return

    const tryPlay = () => {
      video.muted = true
      video.play().catch(() => {})
    }

    tryPlay()
    const onInteract = () => tryPlay()
    window.addEventListener('pointerdown', onInteract, { once: true })
    window.addEventListener('touchstart', onInteract, { once: true })

    return () => {
      window.removeEventListener('pointerdown', onInteract)
      window.removeEventListener('touchstart', onInteract)
    }
  }, [videoSrc])

  return (
    <div className={`background background--${variant}`} aria-hidden="true">
      <div className="background__fallback" />
      {videoSrc && (
        <video
          ref={videoRef}
          className="background__video"
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => {
            videoRef.current?.play().catch(() => {})
          }}
          onError={() => setVideoSrc(null)}
        />
      )}
      <div className="background__overlay" />
      <div className="background__tint" />
      <div className="background__vignette" />
    </div>
  )
}
