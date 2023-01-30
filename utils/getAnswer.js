import { LangDetect } from '../services/LanguageDetect'
import { questionIa } from '../services/questionsIA'
import { spanishAnswer } from './spanishAnswer'

export const getAnswer = async (query) => {
  const lang = await LangDetect(query)
  const { language_code } = lang.results[0]

  if (language_code === 'en') {
    return await questionIa(query)
  }

  return await spanishAnswer(query)
}
