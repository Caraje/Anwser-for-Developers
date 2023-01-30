import { questionIa } from '../services/questionsIA'
import { spanishAnswer } from './spanishAnswer'

// ---------------
const COHERE_API_KEY = import.meta.env.VITE_COHERE_API_KEY
const COHERE_API_DETECT_LANGUAGE_URL = import.meta.env
  .VITE_COHERE_API_DETECT_LANGUAGE_URL

export const langDetect = (input) => {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: `BEARER ${COHERE_API_KEY}`,
    },
    body: JSON.stringify({ texts: [input] }),
  }

  const results = fetch(COHERE_API_DETECT_LANGUAGE_URL, options)
    .then((response) => response.json())
    .then((response) => {
      return response
    })
    .catch((err) => console.error(err))
  return results
}

// ---------------

export const getAnswer = async (query) => {
  const lang = await langDetect(query)
  const { language_code } = lang.results[0]

  if (language_code === 'en') {
    return await questionIa(query)
  }

  return await spanishAnswer(query)
}
