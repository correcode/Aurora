type MusicControlProps = {
  enabled: boolean
  available: boolean
  onToggle: () => void
}

export function MusicControl({ enabled, available, onToggle }: MusicControlProps) {
  if (!available) return null

  return (
    <button
      type="button"
      className={`music-control ${enabled ? 'is-on' : ''}`}
      onClick={onToggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Desativar música' : 'Ativar música'}
    >
      <span className="music-control__icon" aria-hidden="true">
        {enabled ? '♪' : '♩'}
      </span>
      <span className="music-control__label">{enabled ? 'Som ligado' : 'Som'}</span>
    </button>
  )
}
