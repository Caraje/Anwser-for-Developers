import React from 'react'
import style from '../src/styles/ModalInfo.module.css'
const ModalInfo = ({ dialog, infoBase }) => {
  return (
    <dialog className={style.infoPanel} ref={dialog}>
      <header className={style.infoTitle}>
        <h2>{infoBase.moreInfo.title}</h2>
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
        {infoBase.moreInfo.textDesc.map((el, id) => (
          <p className={style.infoParagraph} key={el}>
            {el}
          </p>
        ))}
      </main>
    </dialog>
  )
}

export default ModalInfo
