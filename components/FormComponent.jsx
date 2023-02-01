import React from 'react'
import style from '../src/styles/FormComponent.module.css'
import LoadingBar from './LoadingBar'

const FormComponent = ({ isDisabled, handleForm }) => {
  return (
    <>
      <form disabled className={style.questionForm} onSubmit={handleForm}>
        <label className={style.inputQuestion}>
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
    </>
  )
}

export default FormComponent