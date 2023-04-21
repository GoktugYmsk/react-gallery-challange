import React from 'react'

import './index.css'

function Popup({selectedCar,setSelectedCar}) {
  
  const closePopupModule = () =>{
    setSelectedCar(false)
  }

  return (
    <div className='modul' >
      <h2 className='selectedCarTitle'>{selectedCar.title}</h2>
          <p>{selectedCar.content}</p>
          <button onClick={closePopupModule} className='closePopup' >Çık</button>
    </div>
  )
}

export default Popup