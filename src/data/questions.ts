export type Question = {
  id: number
  text: string
  options: string[]
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'Você está preparado para conhecer alguém muito especial?',
    options: [
      'Sim, estou muito ansioso(a)!',
      'Já estou imaginando o rostinho!',
      'Não vejo a hora de conhecer essa pessoinha!',
    ],
  },
  {
    id: 2,
    text: 'O que você promete para essa pessoinha?',
    options: [
      'Muitos abraços e carinho.',
      'Muitas brincadeiras e aventuras.',
      'Estar presente nos momentos importantes.',
      'Mimá-la sempre que possível!',
    ],
  },
  {
    id: 3,
    text: 'Qual será seu papel na vida desse bebê?',
    options: [
      'Companheiro(a) de aventuras.',
      'Protetor(a) oficial.',
      'Especialista em fazer sorrir.',
      'Tudo isso e muito mais!',
    ],
  },
  {
    id: 4,
    text: 'Uma última pergunta... Você promete fazer parte dessa história?',
    options: [
      'Prometo dar muito amor!',
      'Prometo estar presente!',
      'Prometo fazer parte dos momentos especiais!',
    ],
  },
]
