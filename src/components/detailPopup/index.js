import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productList } from '../../assets/data';
import { setRightBar } from '../configure/configure';
import { setSales } from '../configure/configure';
import './index.scss';

function Detail({ setcloseCarPage }) {
  const [vehicle, setVehicle] = useState(productList);

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const comeBackMainPage = () => {
    navigate('/Hyundai');
    dispatch(setcloseCarPage(true))
    dispatch(setRightBar(true))
    dispatch(setSales(false))
  };

  return (
    <div className='row' >
      <div className='col-12 col-lg-12' >
    <div className='detailContainer'>
      <Helmet>
        <title> Car Details </title>
      </Helmet>
      {vehicle.map(info => (
        <div className='detailVehicle' key={info.productId}>
          <div className='detailTittlePhoto' >
            <img className='detailImage' src='https://www.hyundai.com/content/dam/hyundai/tr/tr/images/home/Haziran-2021/bayon/544x360-1.jpg' />
          </div>
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
    </div>
    </div>
  );
}

export default Detail;
