import React, { useState } from 'react';
import './App.css';
import { initialData } from './assets/data';

function App() {
  const [list, setList] = useState(initialData);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleCarClick = (id) => {
    const selectedCar = list.find(car => car.id === id);
    setSelectedCar(selectedCar);
    console.log('Selected car:', selectedCar);
  }

  return (
    <div className="App">
      <h1 className='h1' >Hyundai Cars</h1>
      <div className="carList">
        {list.map(car => (
          <div className="car" key={car.id} onClick={() => handleCarClick(car.id)}>
            <h3 className='carName' >{car.title}</h3>
          </div>
        ))}
      </div>
      {selectedCar && (
        <div className="carDetails">
          <h2 className='selectedCarTitle'>{selectedCar.title}</h2>
          <p>{selectedCar.content}</p>
        </div>
      )}
    </div>
  );
}

export default App;
