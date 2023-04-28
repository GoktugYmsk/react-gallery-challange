import React from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

function Popup({ selectedCar, setSelectedCar }) {
  const navigate = useNavigate()

  const closePopupModule = () => {
    setSelectedCar(false);
    navigate('Hyundai')
  }

  return (
    <div className='modul'>
      <img className='popupİmage' src={selectedCar.image} alt={`Image of ${selectedCar.title}`} />
      <h2 className='selectedCarTitle'>{selectedCar.title}</h2>
      <p>{selectedCar.content}</p>
      <button onClick={closePopupModule} className='closePopup'>Çık</button>
    </div>
  )
}

export default Popup;
