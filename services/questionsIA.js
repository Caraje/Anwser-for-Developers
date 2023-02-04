import { prompsIA } from '../data/prompsIA'

const COHERE_API_KEY = import.meta.env.VITE_COHERE_API_KEY
const COHERE_API_GENERATE_URL = import.meta.env.VITE_COHERE_API_GENERATE_URL

export async function questionIa(input) {
  const prompt = prompsIA(input)
  const data = {
    model: 'command-xlarge-20221108',
    prompt: prompt,
    max_tokens: 400,
    temperature: 0.7,
    num_generations: 1,
    k: 0,
    p: 0.6,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: ['--'],
    return_likelihoods: 'NONE',
  }

  const response = await fetch(COHERE_API_GENERATE_URL, {
    method: 'POST',
    headers: {
      Authorization: `BEARER ${COHERE_API_KEY}`,
      'Content-Type': 'application/json',
      'Cohere-Version': '2022-12-06',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json())
  const { text } = response.generations[0]
  return text.trim()
}
