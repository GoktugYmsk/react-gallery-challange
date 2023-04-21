import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { productList } from '../../assets/data';

function Detail({ setcloseCarPage }) {
  const [vehicle, setVehicle] = useState(productList);
  const navigate = useNavigate();

  const comeBackMainPage = () => {
    navigate('/Hyundai');
    setcloseCarPage(true);
  };

  return (
    <div>
      <Helmet>
        <title> Car Details </title>
      </Helmet>
      {vehicle.map(info => (
        <div className='detailVehicle' key={info.productId}>
          <div className='carYear'>{info.productName}</div>
        </div>
      ))}
      <button onClick={comeBackMainPage}>Anasayfa</button>
    </div>
  );
}

export default Detail;
