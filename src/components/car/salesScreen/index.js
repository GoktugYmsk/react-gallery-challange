import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setcloseCarPage,setSales } from '../../configure/configure'
import './index.css'

function SalesScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToMainPage = () =>{
    dispatch(setcloseCarPage(true))
    dispatch(setSales(false))
    navigate('Hyundai')
  }

  return (
    <div>
      <h1>Sales Sayfasına Hoşgeldiniz</h1>
      <br/>
      <p>Ana sayfaya dönmek için</p>
      <br/>
      <button onClick={goToMainPage} >Anasayfa</button>
    </div>
  )
}

export default SalesScreen
