import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { initialData } from './assets/data';

function App() {
  const [list, setList] = useState(initialData);

  return (
    <div className="App">
      <h1 className='h1' >Hyundai Cars</h1>
      <div className="carList">
        {list.map(car => (
          <div className="car" key={car.id}>
            <h3 className='carName' >{car.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
