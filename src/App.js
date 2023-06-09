import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiMessageDetail } from 'react-icons/bi';


import { initialData } from './assets/data';
import RightBar from './components/rightBar';
import NavbarHyundai from './components/navbar';
import Car from './components/car';
import Footer from './components/footer';
import './App.css';

function App() {
  const [list, setList] = useState(initialData);
  const [selectedCar, setSelectedCar] = useState(false);
  const navigate = useNavigate();
  const closeLoginPopup = useSelector((state) => state.componentControl.closeLoginPopup)

  const closeCarPage = useSelector((state) => state.componentControl.closeCarPage)

  const handleCarClick = (id) => {
    const selectedCar = list.find(car => car.id === id);
    setSelectedCar(selectedCar);
    navigate(`/Hyundai-${selectedCar.title}`);
  }

  const rightBar = useSelector((state) => state.componentControl.rightBar)

  return (
    <div className="App">
      <NavbarHyundai selectedCar={selectedCar} navigate={navigate} />
      {rightBar && <RightBar />}
      <div className='hyundaiCar' >
        <Car selectedCar={selectedCar} setSelectedCar={setSelectedCar} list={list} handleCarClick={handleCarClick} navigate={navigate} />
      </div>
      <Footer selectedCar={selectedCar} />
      {closeCarPage &&
        <div className='onlineSupport'>
          <BiMessageDetail className='messageIcon' /> <span> Hyundai Canlı Destek </span>
        </div>
      }
    </div>
  );
}

export default App;
