import { useRef } from 'react'
import { useState } from 'react'
import FormComponent from '../components/FormComponent'
import ModalInfo from '../components/ModalInfo'
import TitleLogo from '../components/TitleLogo'
import { infoBase } from '../data/InfoBase'
import { getAnswer } from '../utils/getAnswer'

import style from './styles/Home.module.css'

function App() {
  const [formValue, setFormValue] = useState(infoBase.infoHome)
  const [isDisabled, setIsDisabled] = useState(false)
  const dialog = useRef(null)
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
        <TitleLogo />
        <FormComponent isDisabled={isDisabled} handleForm={handleForm} />
        <textarea
          className={style.answersBox}
          value={formValue}
          onChange={handleForm}
          readOnly
          disabled
        />
        <button
          className={style.btnInfo}
          onClick={() => {
            dialog.current.showModal()
          }}
        >
          !
        </button>
      </section>
      <ModalInfo infoBase={infoBase} dialog={dialog} />
    </>
  )
}

export default App
