import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPause } from 'react-icons/fa';
import './index.scss'

function Slider() {
  const warningMessage = 'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/home/2023/deprem-1860x720-v2.jpg';
  return (
    <div className="carousel-container">
      <div className='row'>
        <div className='col-12 col-lg-12' >
          <Carousel interval={5000}>
            <Carousel.Item className='imageCaorusel' >
              <img
                className="d-block w-100"
                src={warningMessage}
                alt="First slide"
                style={{
                  maxHeight: '620px',
                  maxWidth: '100%',
                  objectFit: 'cover',
                }}
              />
            </Carousel.Item>
            <Carousel.Item className='imageCaorusel' >
              <img
                className="d-block w-100"
                src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/yeni-i10/one-cikanlar-image-2-new.jpg"
                alt="Second slide"
                style={{
                  maxHeight: '620px',
                  maxWidth: '100%',
                  objectFit: 'cover',
                }}
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='imageCaorusel' >
              <img
                className="d-block w-100"
                src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/elantra/CN7_FMC_K4_LHD_LIFESTYLE_MODEL_07_CMYK.jpg"
                alt="Third slide"
                style={{
                  maxHeight: '620px',
                  maxWidth: '100%',
                  objectFit: 'cover',
                }}
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='imageCaorusel' >
              <img
                className="d-block w-100"
                src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/home/2022/haziran/one-cikanlar-1-new.jpg"
                alt="Fourth slide"
                style={{
                  maxHeight: '620px',
                  maxWidth: '100%',
                  objectFit: 'cover',
                }}
              />
              <Carousel.Caption>
                <h3>Fourth slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='imageCaorusel' >
              <img
                className="d-block w-100"
                src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/home/2023/vision23-kapak-1860x720.jpg"
                alt="Fourth slide"
                style={{
                  maxHeight: '620px',
                  maxWidth: '100%',
                  objectFit: 'cover',
                }}
              />
              <h3 className='carouselH3' >Hyundai Vision 23.sayı</h3>
              <button className='caoruselH3Button' >
                <a target='_blank' href='https://vision.social-hyundai.com/vision-dergisi/page/1'>Yeni sayımızı okumak <br /> için tıklayınız</a>
              </button>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Slider;


