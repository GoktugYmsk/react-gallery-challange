import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { setcloseCarPage, setSales } from '../../configure/configure'
import './index.css'

function SalesScreen() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const goToMainPage = () => {
    dispatch(setcloseCarPage(true))
    dispatch(setSales(false))
    navigate('Hyundai')
  }

  const image = 'https://www.hyundai.com/etc/designs/hyundai/template_en/en/images/bg2/bg-contentwrap01.jpg'
  const image2 = 'https://www.hyundai.com/content/dam/hyundai/template_en/en/data/content/dealer-type/ico-focused02.png'
  const image3 = 'https://www.hyundai.com/content/dam/hyundai/template_en/en/data/content/dealer-type/ico-normal03.png'
  const image4 = 'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/content/dealer-type/gri-ikon-60x60.png'

  return (
    <div className='containerSales'>
      <div className='carouselSales' >
        <img className='carouselBackround' src={image} />
        <div className='salesHeaderBackround' ></div>
      </div>
      <h1 className='salesHeader' >Yetkili Satıcı ve Servis Bul</h1>
      <br />
      <p className='salesInfo' >Türkiye’nin dört bir yanında yer alan Hyundai Yetkili Satıcıları’nda, en yeni modellerimizle test sürüşüne çıkabilir ya da araçlarla ilgili detaylı bilgi alabilirsiniz. Hyundai Yetkili Servisleri’nde ise konusunda uzman profesyonellerimiz aracılığı ile Hyundai’nizin bakım ve onarım işlemlerini gerçekleştirebilirsiniz. Kendinize en yakın yetkili satıcı ya da yetkili servisi bulmak için aşağıda yer alan sembollere tıklayabilirsiniz.</p>
      <br />
      <div className='salesAltPhoto' >
        <div className='picture1' >
          <img src={image2} />
          <br />
          <p><span>Yetkili Satıcı</span></p>
        </div>
        <div className='picture2' >
          <img src={image3} />
          <p><span>Yetkili Servis</span></p>
        </div>
        <div className='picture3' >
          <img src={image4} />
          <p className='picture3P' ><span>Elektrikli Otomobil Yetkili Satıcı ve Servis</span></p>
        </div>
      </div>
      <div className='mainDirect' >
        <p>Anasayfaya dönmek için</p>
        <button onClick={goToMainPage} >Anasayfa</button>
      </div>
    </div>
  )
}

export default SalesScreen
