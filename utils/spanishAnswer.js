import { questionIa } from '../services/questionsIA'
import { langTraductor } from '../services/traductor'

export const spanishAnswer = async (query) => {
  const queryTranslate = await langTraductor(query, 'es', 'en')
  if (!queryTranslate.ok)
    return `Existe un error con la API encargada de las traducciones.
Es posible que este operativo en breve, sin embargo le recomendamos repetir la pregunta en inglés.
Disculpe las moletias`
  const queryEN = queryTranslate.translated_text
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

  if (!queryTranslate.translated_text) return msgError
  const spanishAnswer = translate.translated_text
  return spanishAnswer
    .replaceAll('|', '"')
    .replaceAll('$', '\n')
    .replaceAll('--\n', '')
}
