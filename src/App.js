import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialData } from './assets/data';
import { productList } from './assets/data';
import NavbarHyundai from './components/navbar';
import Car from './components/car';
import Footer from './components/footer';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const [list, setList] = useState(initialData);
  const [deneme, setDeneme] = useState(productList)
  const [selectedCar, setSelectedCar] = useState(false);
  const navigate = useNavigate();

  const closeCarPage = useSelector((state) => state.componentControl.closeCarPage)

  const handleCarClick = (id) => {
    const selectedCar = list.find(car => car.id === id);
    setSelectedCar(selectedCar);
    navigate(`/Hyundai-${selectedCar.title}`);
  }

  return (
    <div className="App">
      <NavbarHyundai selectedCar={selectedCar} navigate={navigate} />
      <div className='hyundaiCar' >
        <Car selectedCar={selectedCar} setSelectedCar={setSelectedCar} list={list} handleCarClick={handleCarClick} navigate={navigate} />
      </div>
      <Footer selectedCar={selectedCar} />
      {closeCarPage &&
        <div className='onlineSupport'>
          Canlı Destek
        </div>
      }
    </div>
  );
}

/* car sayfasında galeri bölümüne aktiflik kazandırılacak */

export default App;
