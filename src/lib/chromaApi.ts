export interface ChromaPipelineResponse {
  answer: string
  sources?: string[]
}

const CHROMA_QUERY_PATH = import.meta.env.VITE_CHROMA_QUERY_PATH || '/api/chroma/query'

export async function queryChromaPipeline(question: string): Promise<ChromaPipelineResponse> {
  const trimmedQuestion = question.trim()

  if (!trimmedQuestion) {
    throw new Error('Bitte eine Frage eingeben.')
  }

  const response = await fetch(CHROMA_QUERY_PATH, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: trimmedQuestion
    })
  })

  if (!response.ok) {
    throw new Error(`Pipeline-Fehler (${response.status})`)
  }

  const data = (await response.json()) as ChromaPipelineResponse

  if (!data.answer) {
    throw new Error('Pipeline hat keine Antwort geliefert.')
  }

  return data
}
