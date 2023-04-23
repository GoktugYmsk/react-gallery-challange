import React, { useState, useEffect } from 'react';

import { Routes, useNavigate, Route } from 'react-router-dom';

import { initialData } from './assets/data';
import { productList } from './assets/data';
import NavbarHyundai from './components/navbar';
import Car from './components/car';
import Footer from './components/footer';
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
      <NavbarHyundai/>
      <div className='hyundaiCar' >
        <Car selectedCar={selectedCar} setSelectedCar={setSelectedCar} list={list} handleCarClick={handleCarClick} navigate={navigate}/>
      </div>
      <Footer/>
    </div>
  );
}


export default App;
