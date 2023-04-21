import React, { useState } from 'react'

import { productList } from '../../assets/data'

function Detail() {
  const [vehicle, setVehicle] = useState(productList)


  return (
    <div>
        {vehicle.map(info => (
            <div className='detailVehicle' >
              <div className='carYear' >{info.year}</div>
            </div>
          ))}
    </div>
  )
}

export default Detail
