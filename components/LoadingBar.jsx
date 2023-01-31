import React from 'react'
import style from '../src/styles/LoadingBar.module.css'

const LoadingBar = () => {
  return (
    <div className={style.loader}>
      <div className={style.loaderBar}></div>
    </div>
  )
}

export default LoadingBar
