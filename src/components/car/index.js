import React, { useState } from 'react';

import { Helmet } from 'react-helmet'
import { Routes, useNavigate, Route } from 'react-router-dom';

import Popup from '../popup';
import Detail from '../detailPopup';
import './index.css';

function Car({ handleCarClick, selectedCar, list, setSelectedCar, navigate }) {

  const goToDetail = () => {
    navigate('/detail');
  }

  return (
    <>
      <div className={`carContainer ${selectedCar ? 'selected' : ''}`}>
        <Helmet>
          <title> Hyundai </title>
        </Helmet>
        <div className="carList">
          {list.map(car => (
            <div className="car" key={car.id} onClick={() => handleCarClick(car.id)}>
              <h3 className='carName'>{car.title}</h3>
            </div>
          ))}
        </div>
        {selectedCar && (
          <div className="carDetails">
            <Popup selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
          </div>
        )}
      </div>
      <p>Daha Fazla Bilgi için</p>
      <button onClick={goToDetail}>Devam et</button>
      <Routes>
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </>
  );
}

export default Car;
