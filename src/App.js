import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BiMessageDetail } from 'react-icons/bi';
import { RiSteering2Line } from 'react-icons/ri';
import { AiFillCar } from 'react-icons/ai';
import { GiScrewdriver, GiReceiveMoney } from 'react-icons/gi';
import { MdDesignServices } from 'react-icons/md';
import { RiPictureInPictureExitLine } from 'react-icons/ri';


import { initialData } from './assets/data';
import { productList } from './assets/data';
import NavbarHyundai from './components/navbar';
import Car from './components/car';
import Footer from './components/footer';
import './App.css';

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
      <div className='rightBar' >
        <div className='rightBarIcons' ><RiSteering2Line style={{ background: ' rgb(31, 126, 186)' }} /></div>
        <div className='rightBarIcons'><AiFillCar style={{ background: ' rgb(31, 126, 186)' }} /> </div>
        <div className='rightBarIcons'><GiScrewdriver style={{ background: ' rgb(31, 126, 186)' }} /></div>
        <div className='rightBarIcons'><MdDesignServices style={{ background: ' rgb(31, 126, 186)' }} /></div>
        <div className='rightBarIcons'><GiReceiveMoney style={{ background: ' rgb(31, 126, 186)' }} /></div>
        <div className='rightBarIcons'><RiPictureInPictureExitLine style={{ background: ' rgb(31, 126, 186)' }} /></div>
      </div>
      <div className='hyundaiCar' >
        <Car selectedCar={selectedCar} setSelectedCar={setSelectedCar} list={list} handleCarClick={handleCarClick} navigate={navigate} />
      </div>
      <Footer selectedCar={selectedCar} />
      {closeCarPage &&
        <div className='onlineSupport'>
          <BiMessageDetail className='messageIcon' /> Hyundai Canlı Destek
        </div>
      }
    </div>
  );
}

export default App;
