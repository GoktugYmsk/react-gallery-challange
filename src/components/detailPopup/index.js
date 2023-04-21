import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import { productList } from '../../assets/data'

function Detail({navigate,setcloseCarPage}) {
  const [vehicle, setVehicle] = useState(productList)

  const comeBackMainPage = () =>{
    navigate('/Hyundai')
    setcloseCarPage(true)
  }

  return (
    <div>
      <Helmet>
        <title> Car Details </title>
      </Helmet>
      {vehicle.map(info => (
        <div className='detailVehicle' >
          <div className='carYear' >{info.productName}</div>
        </div>
      ))}
      <button onClick={comeBackMainPage}>Anasayfa</button>
    </div>
  )
}

export default Detail
