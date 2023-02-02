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
            autoComplete='off'
          />
          <button
            disabled={isDisabled}
            className={isDisabled ? style.disabled : style.btn}
          >
            Enviar
          </button>
        </label>
        {isDisabled && <LoadingBar />}
      </form>
    </>
  )
}

export default FormComponent
