import React, { useState } from 'react';

import { Helmet } from 'react-helmet'
import Detail from '../detailPopup';

import Popup from '../popup';
import './index.css';

function Car({ handleCarClick, selectedCar, list, setSelectedCar, navigate }) {
  const [closeCarPage, setcloseCarPage] = useState(true)

  const goToDetail = () => {
    setcloseCarPage(false)
    navigate('/detail');
  }

  return (
    <>
      <div className={`carContainer ${selectedCar ? 'selected' : ''}`}>
        <Helmet>
          <title> Hyundai </title>
        </Helmet>
        {closeCarPage &&
          <div className='carInfoPage' >
            <div className="carList">
              {list.map(car => (
                <div className="car" key={car.id} onClick={() => handleCarClick(car.id)}>
                  <h3 className='carName'>{car.title}</h3>
                </div>
              ))}
            </div>
            <div className='detailPageObject' >
              <p>Daha Fazla Bilgi için</p>
              <button onClick={goToDetail}>Devam et</button>
            </div>
          </div>
        }
        {selectedCar && (
          <div className="carDetails">
            <Popup selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
          </div>
        )}
      </div>
      {!closeCarPage &&
        <Detail setcloseCarPage={setcloseCarPage} />
      }
    </>
  );
}

export default Car;
