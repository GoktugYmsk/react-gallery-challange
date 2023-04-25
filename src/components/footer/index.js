import React from 'react';

import { useSelector } from 'react-redux';

import './index.css';

function Footer({ selectedCar }) {
  const closeCarPage = useSelector((state) => state.componentControl.closeCarPage)

  const philosophy = 'https://www.hyundai.com/content/dam/hyundai/template_en/en/images/home/home-small-banner-philosophy-closer-view-hands-polishing-clay-model-pc.jpg'
  const about = 'https://www.hyundai.com/content/dam/hyundai/template_en/en/images/home/home-small-banner-history-black-car-driving-on-the-bridge-of-sea-pc.jpg'
  const mediaCenter = 'https://www.hyundai.com/content/dam/hyundai/template_en/en/images/home/home-small-banner-media-center-people-in-front-of-building-pc.jpg'
  const offerOfMounth = 'https://www.hyundai.com/content/dam/hyundai/template_en/en/images/home/home-small-banner-campaign-car-driving-on-the-road-pc.jpg'

  return (
    <div className='footerSide' >
      {
        closeCarPage &&
        <div className="footerPhotoSide">
          <div className="columnPhoto">
            <div className="imageWrapper">
              <img src={philosophy} />
              <p className='philosophyP' >Felsefemiz</p>
            </div>
            <div className="imageWrapper">
              <img src={about} />
              <p className='aboutP' >Hakkımızda</p>
            </div>
          </div>
          <div className="columnPhoto">
            <div className="imageWrapper">
              <img src={mediaCenter} />
              <p className='mediaCenterP' >Medya Merkezi</p>
            </div>
            <div className="imageWrapper">
              <img src={offerOfMounth} />
              <p className='offerOfMounthP' >Ayın Teklifleri</p>
            </div>
          </div>
        </div>
      }
      <footer className={`footer-container ${selectedCar ? 'selected' : ''}`}>
        <div className='footerBar' >
          <div className="footer-left">
            <h3>Hyundai</h3>
            <p>
              Hyundai, otomotiv sektöründe dünya genelinde bilinen ve sevilen bir markadır. 1967 yılında Güney Kore'de kurulan Hyundai, dünya genelinde araç üretimi, satışı ve servisi yapmaktadır.
            </p>
          </div>
          <div className="footer-right">
            <h3>İletişim</h3>
            <p>
              Adres: Hyundai Plaza, Innovalley-ro 66, Dong-gu, Ulsan, Güney Kore
            </p>
            <p>
              Telefon: 123-456-7890
            </p>
            <p>
              E-posta: info@hyundai.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
