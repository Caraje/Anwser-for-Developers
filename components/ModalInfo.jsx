import React from 'react'
import style from '../src/styles/ModalInfo.module.css'
const ModalInfo = ({ dialog, infoBase }) => {
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
          Este proyecto ha sido creado con motivo del Hackathon de Enero 2023
          creado por Midudev.{' '}
          <a
            href='https://twitter.com/midudev'
            target='_blank'
            rel='noreferrer'
          >
            Midudev
          </a>
        </p>
        <p className={style.infoParagraph}>
          Se ha creado con la tecnologia de Inteligencia Artificial de{' '}
          <a href='https://cohere.ai/' target='_blank' rel='noreferrer'>
            Co:here
          </a>
        </p>
        <p className={style.infoParagraph}>
          La idea propuesta consiste en que el usuario puede hacer las preguntas
          sobre desarrollo web que tenga a la aplicación y mediante el uso de la
          inteligencia artificial de{' '}
          <a href='https://cohere.ai/' target='_blank' rel='noreferrer'>
            Co:here
          </a>
          , se genera una respuesta acorde a lo aprendido por la IA.
        </p>
        <p className={style.infoParagraph}>
          Las respuestas generadas seran mas claras cuanto mas descriptiva sea
          la pregunta realizada.
        </p>
        <p className={style.infoParagraph}>
          La IA creada por{' '}
          <a href='https://cohere.ai/' target='_blank' rel='noreferrer'>
            Co:here
          </a>{' '}
          esta pensada actualmente para ser usada en Ingles, y es en este idioma
          como se obtienen las respuestas mas fieles.
        </p>
        <p className={style.infoParagraph}>
          Sin embargo esta aplicacion esta pensada para ofrecer respuestas tanto
          a personas que saben ingles como a las que no, por lo que hace uso de
          una API de traduccion automatica de{' '}
          <a
            href='https://learn.microsoft.com/en-us/azure/cognitive-services/translator/'
            target='_blank'
            rel='noreferrer'
          >
            Microsoft
          </a>
          , que traduce la pregunta del español al ingles al igual que la
          respuesta del ingles al español.
        </p>
        <p className={style.infoParagraph}>
          Desgraciadamente esta traduccion no siempre es la mas exacta y puede
          traer algun error.
        </p>
        <p className={style.infoParagraph}>
          En ocasiones las traducciones pueden generar un error, en ese caso
          recomendamos repetir la pregunta a la IA, pero lo ideal es que se
          repita en ingles, evitando asi posibles errores.
        </p>
        <p className={style.infoParagraph}>
          Esta aplicacion ha sido creada por Caraje y si te gusta puedes ver mas
          trabajos en la web{' '}
          <a
            href='https://www.carlosajenjo.es'
            target='_blank'
            rel='noreferrer'
          >
            www.carlosajenjo.es
          </a>
        </p>
        <p className={style.infoParagraph}>
          Toda esta web esta libre de derechos de autor (expectuando los que
          puedan tener las tecnologias de{' '}
          <a href='https://cohere.ai/' target='_blank' rel='noreferrer'>
            Co:here
          </a>{' '}
          y{' '}
          <a
            href='https://learn.microsoft.com/en-us/azure/cognitive-services/translator/'
            target='_blank'
            rel='noreferrer'
          >
            Microsoft
          </a>
          ), por lo demas, se libre para compiar lo que necesites, si es
          haciendo mencion, mucho mejor.
        </p>
        <p className={style.infoParagraph}>
          ¡¡¡Ten un buen dia y gracias por visitar esta web !!!
        </p>
        {/* {infoBase.moreInfo.textDesc.map((el, id) => (
          <p className={style.infoParagraph} key={el}>
            {el}
          </p>
        ))} */}
      </main>
    </dialog>
  )
}

export default ModalInfo
