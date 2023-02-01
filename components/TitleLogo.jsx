import React from 'react'
import style from '../src/styles/TitleLogo.module.css'

const TitleLogo = () => {
  return (
    <h1 className={style.title}>
      Answer
      <br />
      <sup className={style.spanA}>for</sup>
      <span className={style.spanB}>Developers</span>
    </h1>
  )
}

export default TitleLogo
