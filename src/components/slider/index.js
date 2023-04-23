import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function Slider() {

    const warningMessage = 'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/home/2023/deprem-1860x720-v2.jpg'
    
    return (
        <Carousel interval={5000} >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={warningMessage}
                    alt="First slide"
                    style={{ height: '600px' }}
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/yeni-i10/one-cikanlar-image-2-new.jpg"
                    alt="Second slide"
                    style={{ height: '600px', objectFit: 'cover' }}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/elantra/CN7_FMC_K4_LHD_LIFESTYLE_MODEL_07_CMYK.jpg"
                    alt="Third slide"
                    style={{ height: '600px' }}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.hyundai.com/content/dam/hyundai/tr/tr/images/home/2022/haziran/one-cikanlar-1-new.jpg"
                    alt="Third slide"
                    style={{ height: '600px' }}
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
