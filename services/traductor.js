export const langTraductor = (text, target) => {
  const MICROSOFT_TRANSLATE_API_KEY = import.meta.env
    .VITE_MICROSOFT_TRANSLATE_API_KEY
  const MICROSOFT_TRANSLATE_API_URL = import.meta.env
    .VITE_MICROSOFT_TRANSLATE_API_URL

  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': MICROSOFT_TRANSLATE_API_KEY,
      'X-RapidAPI-Host': MICROSOFT_TRANSLATE_API_URL,
    },
    body: `[{"Text":"${text}"}]`,
  }

  const traduction = fetch(
    `https://${MICROSOFT_TRANSLATE_API_URL}/translate?to%5B0%5D=${target}&api-version=3.0&profanityAction=NoAction&textType=plain`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response
    })
    .catch((err) => {
      return err
    })

  return traduction
}
