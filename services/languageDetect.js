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
    .catch((err) => console.error(err))
  return results
}
