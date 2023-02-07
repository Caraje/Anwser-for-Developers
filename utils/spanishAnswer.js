import { questionIa } from '../services/questionsIA'
import { langTraductor } from '../services/traductor'

export const spanishAnswer = async (query) => {
  const queryTranslate = await langTraductor(query, 'es', 'en')

  if (queryTranslate.status !== 'success')
    return `Existe un error con la API encargada de las traducciones.
  Es posible que este operativo en breve, sin embargo le recomendamos repetir la pregunta en inglés.
  Disculpe las moletias`

  const queryEN = queryTranslate.data.translatedText
  const originalAnswer = await questionIa(queryEN)
  const msgError =
    'Se ha producido un error, le recomendamos repetir la pregunta en inglés.\nDisculpe las molestias'

  const translate = await langTraductor(
    originalAnswer
      .replaceAll('"', '|')
      .replaceAll('\n', '$')
      .replaceAll('--\n', ''),
    'en',
    'es'
  )

  if (!queryTranslate.data.translatedText) return msgError
  const spanishAnswer = translate.data.translatedText
  return spanishAnswer
    .replaceAll('|', '"')
    .replaceAll('$', '\n')
    .replaceAll('--\n', '')
}
