type FloatingParticlesProps = {
  intensity?: 'low' | 'high'
}

const PARTICLES = [
  { left: '8%', delay: '0s', duration: '18s', size: 6, kind: 'heart' },
  { left: '18%', delay: '3s', duration: '22s', size: 3, kind: 'spark' },
  { left: '27%', delay: '1.4s', duration: '16s', size: 7, kind: 'heart' },
  { left: '39%', delay: '5s', duration: '20s', size: 4, kind: 'star' },
  { left: '48%', delay: '2.2s', duration: '24s', size: 5, kind: 'heart' },
  { left: '58%', delay: '6s', duration: '17s', size: 3, kind: 'spark' },
  { left: '67%', delay: '0.8s', duration: '21s', size: 6, kind: 'heart' },
  { left: '76%', delay: '4.1s', duration: '19s', size: 3, kind: 'spark' },
  { left: '86%', delay: '2.8s', duration: '23s', size: 7, kind: 'heart' },
  { left: '93%', delay: '7s', duration: '18s', size: 4, kind: 'star' },
  { left: '12%', delay: '9s', duration: '26s', size: 5, kind: 'heart' },
  { left: '72%', delay: '11s', duration: '15s', size: 6, kind: 'heart' },
]

export function FloatingParticles({ intensity = 'low' }: FloatingParticlesProps) {
  const extra = intensity === 'high'
  const items = extra
    ? [
        ...PARTICLES,
        { left: '22%', delay: '1s', duration: '14s', size: 4, kind: 'heart' },
        { left: '44%', delay: '3.5s', duration: '13s', size: 3, kind: 'star' },
        { left: '81%', delay: '2s', duration: '16s', size: 4, kind: 'heart' },
      ]
    : PARTICLES

  return (
    <div className={`particles ${extra ? 'is-intense' : ''}`} aria-hidden="true">
      {items.map((particle, index) => (
        <span
          key={`${particle.kind}-${index}`}
          className={`particle particle--${particle.kind}`}
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
            width: particle.size,
            height: particle.size,
          }}
        />
      ))}
    </div>
  )
}
