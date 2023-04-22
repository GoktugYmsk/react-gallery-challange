import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { productList } from '../../assets/data';
import './index.css';

function Detail({ setcloseCarPage }) {
  const [vehicle, setVehicle] = useState(productList);
  const navigate = useNavigate();

  const comeBackMainPage = () => {
    navigate('/Hyundai');
    setcloseCarPage(true);
  };

  return (
    <div className='detailContainer'>
      <Helmet>
        <title> Car Details </title>
      </Helmet>
      {vehicle.map(info => (
        <div className='detailVehicle' key={info.productId}>
          <table>
            <div className='infoDetail' >
              <tr>
                <td colSpan='4'>{info.productName}</td>
              </tr>
              <tr>
                <td>Model</td>
                <td>{info.model}</td>
                <td>Trim Code</td>
                <td>{info.trimCode}</td>
              </tr>
              <tr>
                <td>Motor Gücü</td>
                <td>{info.enginePower}</td>
                <td>Vites Türü</td>
                <td>{info.transmission}</td>
              </tr>
              <tr>
                <td>Renk Seçenekleri</td>
                <td colSpan='3'>{info.color}</td>
              </tr>
            </div>
          </table>
        </div>
      ))}
      <button className='mainPageBackButton' onClick={comeBackMainPage}>Anasayfa</button>
    </div>
  );
}

export default Detail;
