import React, { useState, useEffect } from 'react';

import { Routes, useNavigate, Route } from 'react-router-dom';

import { initialData } from './assets/data';
import Car from './components/car';
import Detail from './components/detailPopup';
import './App.css';

function App() {
  const [list, setList] = useState(initialData);
  const [selectedCar, setSelectedCar] = useState(false);
  const navigate = useNavigate();

  const handleCarClick = (id) => {
    const selectedCar = list.find(car => car.id === id);
    setSelectedCar(selectedCar);
    navigate(`/Hyundai ${selectedCar.title}`);
  }

  return (
    <div className="App">
      <h1 className='h1'>Hyundai Cars</h1>
      <div className='hyundaiCar' >
          <Car selectedCar={selectedCar} ssetSelectedCar={setSelectedCar} list={list} handleCarClick={handleCarClick} setSelectedCar={setSelectedCar} navigate={navigate} />
      </div>
    </div>
  );
}

export default App;
