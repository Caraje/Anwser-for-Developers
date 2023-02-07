export const langTraductor = (text, from, target) => {
  const TRANSLATE_API_KEY = import.meta.env.VITE_TRANSLATE_API_KEY
  const TRANSLATE_API_URL = import.meta.env.VITE_TRANSLATE_API_URL
  const encodedParams = new URLSearchParams()
  encodedParams.append('from', from)
  encodedParams.append('to', target)
  encodedParams.append('text', text)
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': TRANSLATE_API_KEY,
      'X-RapidAPI-Host': 'translo.p.rapidapi.com',
    },
    body: encodedParams,
  }

  const traduction = fetch(
    `https://${TRANSLATE_API_URL}/api/v3/translate`,
    options
  )
    .then((response) => response.json())
    .catch((err) => err)

  return traduction
}
