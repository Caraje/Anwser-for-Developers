import { useState } from 'react'
import LoadingBar from '../components/LoadingBar'
import { getAnswer } from '../utils/getAnswer'

import style from './styles/Home.module.css'

function App() {
  const [formValue, setFormValue] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const msgError = `Tú consulta esta vacía o es demasiado corta.\nPor favor, introduce una consulta más larga`

  const handleForm = async (event) => {
    event.preventDefault()
    setIsDisabled(true)
    const query = event.target.question.value
    if (query.length < 5) {
      setFormValue(msgError)
      setIsDisabled(false)
      return
    }
    setFormValue(await getAnswer(query))
    setIsDisabled(false)
  }

  return (
    <>
      <section className={style.container}>
        <h1 className={style.title}>
          Answer
          <br />
          <sup className={style.spanA}>for</sup>
          <span className={style.spanB}>Developers</span>
        </h1>

        <form disabled className={style.questionForm} onSubmit={handleForm}>
          <label clasName={style.inputQuestion}>
            <input
              className={style.inputForm}
              name='question'
              placeholder='Aqui va la pregunta'
            />
            <button
              disabled={isDisabled}
              className={isDisabled ? style.disabled : style.btn}
            >
              Enviar
            </button>
          </label>
        </form>
        {isDisabled && <LoadingBar />}
      </section>
      {/* <main className={style.container}>
        <section className={style.titles}>
          <h1>Question.dev</h1>
          <p>
            Realiza todas las preguntas que tengas sobre el mundo del desarrollo
            FrontEnd
          </p>
        </section>
        <section className={style.questionContainer}>
          <textarea
            value={formValue}
            onChange={handleForm}
            readOnly
            disabled
            placeholder='Aqui se muestra la respuesta a la pregunta'
          />
          <form disabled className={style.questionForm} onSubmit={handleForm}>
            <label>
              Haz tu pregunta:
              <input name='question' placeholder='Aqui va la pregunta' />
            </label>
            <button
              disabled={isDisabled}
              className={isDisabled ? style.disabled : style.btn}
            >
              {isDisabled ? 'Esperando respuesta' : 'Envia tu pregunta'}
            </button>
          </form>
        </section>
        <LoadingBar />
      </main>
      <footer className={style.footerWeb}>
        <section>
          App de{' '}
          <a
            href='https://www.carlosajenjo.es'
            target='_blank'
            rel='noopener noreferrer'
          >
            www.carlosajenjo.es
          </a>{' '}
          para la Hackathon creada por{' '}
          <a
            href='https://twitter.com/midudev'
            target='_blank'
            rel='noopener noreferrer'
          >
            midudev
          </a>
          <br />
          Usando la tecnologia de{' '}
          <a
            href='https://cohere.ai/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Co:here
          </a>
        </section>
      </footer> */}
    </>
  )
}

export default App
