import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Detail from '../detailPopup';
import Popup from '../popup';
import Slider from '../slider/Slider';
import './index.css';

function Car({ handleCarClick, selectedCar, list, setSelectedCar, navigate }) {
  const [closeCarPage, setcloseCarPage] = useState(true);

  const goToDetail = () => {
    setcloseCarPage(false);
    navigate('/Detail-Page');
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
          </div>
        )}
        {selectedCar && (
          <div className="carDetails">
            <Popup selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
          </div>
        )}
        {closeCarPage &&
          <div className='footerImage' >
            <img className='footerPhoto' src='https://www.hyundai.com/content/dam/hyundai/template_en/en/images/home/home-big-banner-maintenance-grill-of-navy-car-pc.jpg' />
          </div>}

      </div>
      {!closeCarPage && <Detail setcloseCarPage={setcloseCarPage} />}
    </>
  );
}

export default Car;
