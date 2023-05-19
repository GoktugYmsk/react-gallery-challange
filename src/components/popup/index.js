import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import './index.css';

function Popup({ selectedCar, setSelectedCar }) {
  const navigate = useNavigate();
  const popupRef = useRef();

  const closePopupModule = () => {
    setSelectedCar(false);
    navigate('/Hyundai');
  };

  useEffect(() => {
    const handleEscKeyPress = (event) => {
      if (event.keyCode === 27) {
        closePopupModule();
      }
    };

    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopupModule();
      }
    };

    document.addEventListener('keydown', handleEscKeyPress);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closePopupModule]);

  return (
    <div className='row'>
      <div className='col-12 col-lg-12'>
        <div ref={popupRef} className='modul'>
          <img className='popupImage' src={selectedCar.image} alt={`Image of ${selectedCar.title}`} />
          <h2 className='selectedCarTitle'>{selectedCar.title}</h2>
          <p>{selectedCar.content}</p>
          <button onClick={closePopupModule} className='closePopup'>Çık</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
