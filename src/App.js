import React, { useState, useEffect } from 'react';

import { Routes, useNavigate, Route } from 'react-router-dom';

import { initialData } from './assets/data';
import { productList } from './assets/data';
import Car from './components/car';
import './App.css';

function App() {
  const [list, setList] = useState(initialData);
  const [deneme,setDeneme] = useState(productList)
  const [selectedCar, setSelectedCar] = useState(false);
  const navigate = useNavigate();

  console.log(deneme)
  
  const handleCarClick = (id) => {
    const selectedCar = list.find(car => car.id === id);
    setSelectedCar(selectedCar);
    navigate(`/Hyundai-${selectedCar.title}`);
  }

  return (
    <div className="App">
      <h1 className='h1'>Hyundai</h1>
      <div className='hyundaiCar' >
        <Car selectedCar={selectedCar} setSelectedCar={setSelectedCar} list={list} handleCarClick={handleCarClick} navigate={navigate}/>
      </div>
    </div>
  );
}


export default App;
