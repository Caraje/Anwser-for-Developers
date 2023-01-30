import { questionIa } from '../services/questionsIA'
import { langTraductor } from '../services/traductor'

export const spanishAnswer = async (query) => {
  const queryTranslate = await LangTraductor(query, 'en')
  const queryEN = queryTranslate[0].translations[0].text
  const originalAnswer = await questionIa(queryEN)
  const msgError =
    'Se ha producido un error, le recomendamos repetir la pregunta en ingles.\nDisculpe las molestias'

  const translate = await langTraductor(
    originalAnswer
      .replaceAll('"', '|')
      .replaceAll('\n', '$')
      .replaceAll('--\n', ''),
    'es'
  )

  if (translate.message === 'Failed to fetch' || translate.info) return msgError
  const spanishAnswer = translate[0].translations[0].text
  return spanishAnswer
    .replaceAll('|', '"')
    .replaceAll('$', '\n')
    .replaceAll('--\n', '')
}
