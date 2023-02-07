import React from 'react'
import style from '../src/styles/ModalInfo.module.css'
const ModalInfo = ({ dialog }) => {
  return (
    <dialog className={style.infoPanel} ref={dialog}>
      <header className={style.infoTitle}>
        <h2>Información</h2>
        <button
          className={style.btnModal}
          onClick={() => {
            dialog.current.close()
          }}
        >
          X
        </button>
      </header>
      <div className={style.boxVoid}></div>
      <main>
        <p className={style.infoParagraph}>
          Este proyecto fue creado para el Hackathon de Enero 2023 organizado
          por{' '}
          <a
            href='https://twitter.com/midudev'
            target='_blank'
            rel='noreferrer'
          >
            Midudev
          </a>
          . Fue desarrollado con la tecnología de Inteligencia Artificial de{' '}
          <a href='https://cohere.ai/' target='_blank' rel='noreferrer'>
            Co:here
          </a>
          .
        </p>

        <p className={style.infoParagraph}>
          La propuesta consiste en que los usuarios puedan hacer preguntas sobre
          desarrollo web a la aplicación y recibir respuestas generadas por la
          IA de{' '}
          <a href='https://cohere.ai/' target='_blank' rel='noreferrer'>
            Co:here
          </a>
          , basadas en su aprendizaje. Cuanto más detallada sea la pregunta, más
          clara será la respuesta generada.
        </p>

        <p className={style.infoParagraph}>
          Actualmente, la IA de{' '}
          <a href='https://cohere.ai/' target='_blank' rel='noreferrer'>
            Co:here
          </a>{' '}
          está diseñada para responder en inglés y es en este idioma donde se
          obtienen las respuestas más precisas. Sin embargo, la aplicación está
          diseñada para atender tanto a personas que hablen inglés como a
          aquellas que no, por lo que utiliza una API de traducción automática
          de{' '}
          <a
            href='https://rapidapi.com/dickyagustin/api/text-translator2'
            target='_blank'
            rel='noreferrer'
          >
            DEVISTY
          </a>{' '}
          que traduce la pregunta y la respuesta del español al inglés y
          viceversa.
        </p>

        <p className={style.infoParagraph}>
          Es importante destacar que la traducción automática no siempre es
          perfecta y puede causar errores. En caso de que la traducción resulte
          incorrecta, se recomienda hacer la pregunta de nuevo en inglés para
          evitar errores.
        </p>

        <p className={style.infoParagraph}>
          Este proyecto fue creado por Caraje y puedes ver más de su trabajo en
          su sitio web{' '}
          <a
            href='https://www.carlosajenjo.es'
            target='_blank'
            rel='noreferrer'
          >
            www.carlosajenjo.es
          </a>
          .
        </p>

        <p className={style.infoParagraph}>
          Todo el contenido de esta página está libre de derechos de autor
          (exceptuando aquellos que puedan corresponder a{' '}
          <a href='https://cohere.ai/' target='_blank' rel='noreferrer'>
            Co:here
          </a>{' '}
          y{' '}
          <a
            href='https://rapidapi.com/dickyagustin/api/text-translator2'
            target='_blank'
            rel='noreferrer'
          >
            DEVISTY
          </a>
          ), por lo que puedes copiar lo que necesites aunque se agradece una
          mención.
        </p>

        <p className={style.infoParagraph}>
          ¡Gracias por visitar esta página! ¡Que tengas un buen día!
        </p>
      </main>
    </dialog>
  )
}

export default ModalInfo
