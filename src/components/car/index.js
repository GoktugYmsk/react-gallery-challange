
import React, { useState } from 'react';

import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import Detail from '../detailPopup';
import Popup from '../popup';
import Slider from '../slider'
import { setcloseCarPage } from '../configure/configure';
import { imageData } from '../../assets/data';
import Carousel from './carouselFooter';
import './index.css';

function Car({ handleCarClick, selectedCar, list, setSelectedCar, navigate }) {
  const [turn, setTurn] = useState(imageData)
  const dispatch = useDispatch()

  const closeCarPage = useSelector((state) => state.componentControl.closeCarPage)
  const goToDetail = () => {
    dispatch(setcloseCarPage(false))
    navigate('/Detail-Page');
  };

  const handlePrevClick = () => {

  };

  const handleNextClick = () => {

  };

  const getCarImage = (carId) => {
    const selectedCar = list.find((car) => car.id === carId);
    return selectedCar.image;
  };

  return (
    <>
      <div className={`carContainer ${selectedCar ? 'selected' : ''}`}>
        <Helmet>
          <title> Hyundai </title>
        </Helmet>
        {closeCarPage &&
          <div className='sliderPage' >
            <div className='sliderBar' >
              <Slider list={list} />
            </div>
          </div>}
        {closeCarPage && (
          <div className='carInfoPage' >
            <div className="carList">
              {list.map(car => (
                <div className="car" key={car.id} onClick={() => handleCarClick(car.id)}>
                  <h3 className='carName'>{car.title}</h3>
                  <img onClick={() => handleCarClick(car.id)} className='imageCar' src={getCarImage(car.id)} alt={`Image of ${car.title}`} />
                </div>
              ))}
            </div>
            <div className='detailPageObject' >
              <p>Daha Fazla Bilgi için</p>
              <button onClick={goToDetail}>Devam et</button>
            </div>
            <div className='suvPacket'>
              <h4 className='suvh4' >Hyundai SUV Ailesi</h4>
              <div className='galleryContainer'>
                <div className='galleryWrapper' >
                  {turn.map((picture, index) => (
                    <div className='galleryMod' key={index}>
                      <img src={picture.bayon} alt='bayon' />
                      <img src={picture.iconic} alt='iconic' />
                      <img src={picture.kona} alt='kona' />
                      <img src={picture.konaElectric} alt='kona electric' />
                      <img src={picture.santafe} alt='santafe' />
                      <img src={picture.tucson} alt='tucson' />
                    </div>
                  ))}
                </div>
                <div className='galleryMod-controls'>
                  <button className='rightClick' onClick={handlePrevClick} >
                    <FaChevronRight />
                  </button>
                  <button className='leftClick' onClick={handleNextClick} >
                    <FaChevronLeft />
                  </button>
                </div>
                <div className='actionCircle' >
                  <div onClick={handlePrevClick} className='circle' ></div>
                  <div onClick={handleNextClick} className='circle' ></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedCar && (
          <div className="carDetails">
            <Popup selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
          </div>
        )}
        {closeCarPage &&
          <div className='footerUstBar' >
            <div className={`footerImage ${selectedCar ? 'selected' : ''}`}>
              <img className='footerPhoto' src='https://www.hyundai.com/content/dam/hyundai/template_en/en/images/home/home-big-banner-maintenance-grill-of-navy-car-pc.jpg' />
              <div className='carCarePage' >
                <h3 className='careHeader' >Bakım</h3>
                <p className='careInfo' >Araç Bakımı neden düzenli yaptırılmalı?</p>
                <button className='careInfoButton' >
                  <a href=''>Detaylar</a>
                </button>
              </div>
            </div>
          </div>}
        {closeCarPage &&
          <Carousel />
        }
      </div>
      {!closeCarPage && <Detail setcloseCarPage={setcloseCarPage} />}
    </>
  );
}

export default Car;

/*

********************  imleç hareketiyle değişen resimler

    <div className='i20Change'
          onMouseMove={(event) => {
            const halfWidth = event.currentTarget.clientWidth / 2;
            const mouseX = event.clientX - event.currentTarget.offsetLeft;
            const offsetX = ((mouseX - halfWidth) / halfWidth) * 100;
            setOffset(offsetX);
          }} >
          <img className='i20Normal' src={i20Normal} style={{ position: 'absolute', top: '0', left: '0', width: '600px', height: '400px', objectFit: 'cover', transform: `translateX(${offset}px)` }} />
          <img className='i20Race' src={i20Race} style={{ position: 'absolute', top: '0', left: '0', width: '600px', height: '400px', objectFit: 'cover', transform: `translateX(-${offset}px)` }} />
        </div>

*/
/*

********************  imleç hareketiyle değişen resimler

    <div className='i20Change'
          onMouseMove={(event) => {
            const halfWidth = event.currentTarget.clientWidth / 2;
            const mouseX = event.clientX - event.currentTarget.offsetLeft;
            const offsetX = ((mouseX - halfWidth) / halfWidth) * 100;
            setOffset(offsetX);
          }} >
          <img className='i20Normal' src={i20Normal} style={{ position: 'absolute', top: '0', left: '0', width: '600px', height: '400px', objectFit: 'cover', transform: `translateX(${offset}px)` }} />
          <img className='i20Race' src={i20Race} style={{ position: 'absolute', top: '0', left: '0', width: '600px', height: '400px', objectFit: 'cover', transform: `translateX(-${offset}px)` }} />
        </div>

*/
