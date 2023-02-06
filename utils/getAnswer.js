import { langDetect } from '../services/languageDetect'
import { questionIa } from '../services/questionsIA'
import { spanishAnswer } from './spanishAnswer'


export const getAnswer = async (query) => {
  const lang = await langDetect(query)
  const { language_code } = lang.results[0]
  if (language_code === 'en') {
    return await questionIa(query)
  }

  return await spanishAnswer(query)
}
