import React from 'react';
import Popup from '../popup';
import './index.css';

function Car({ handleCarClick, selectedCar, list, setSelectedCar }) {
  return (
    <div className={`carContainer ${selectedCar ? 'selected' : ''}`}>
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
  );
}

export default Car;
