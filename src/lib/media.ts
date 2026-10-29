export async function mediaFileExists(path: string, kind: 'video' | 'audio') {
  try {
    let response = await fetch(path, { method: 'HEAD' })
    if (response.status === 405 || response.status === 501) {
      response = await fetch(path, {
        method: 'GET',
        headers: { Range: 'bytes=0-16' },
      })
    }
    const type = (response.headers.get('content-type') || '').toLowerCase()
    if (!response.ok || type.includes('text/html')) return false
    if (kind === 'video') {
      return type.includes('video') || type.includes('mp4') || type.includes('octet-stream')
    }
    return (
      type.includes('audio') ||
      type.includes('mpeg') ||
      type.includes('mp3') ||
      type.includes('octet-stream')
    )
  } catch {
    return false
  }
}
