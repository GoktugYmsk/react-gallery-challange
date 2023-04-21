import React, { useState } from 'react'


import Detail from '../detailPopup'
import './index.css'

function Popup({ selectedCar, setSelectedCar }) {
 

  const closePopupModule = () => {
    setSelectedCar(false)
  }

  return (
    <>
      <div className='modul' >
        <h2 className='selectedCarTitle'>{selectedCar.title}</h2>
        <p>{selectedCar.content}</p>
        <button onClick={closePopupModule} className='closePopup' >Çık</button>
      </div>
      <p>Daha Fazla Bilgi için</p>
      <button>Devam et</button>
    </>
  )
}

export default Popup
