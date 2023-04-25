import React, { useState } from 'react';
import './index.css';

function Carousel() {
  const images = [
    'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/kona/kasim-2022/KONA-new-704x468.jpg',
    'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/elantra-2021/default/elantra-672-364.png',
    'https://www.hyundai.com/content/dam/hyundai/tr/tr/data/vehicle-thumbnail/product/i20n/default/i20n-672x364.png',
    'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/kona/kasim-2022/KONA-new-704x468.jpg',
    'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/kona/kasim-2022/KONA-new-704x468.jpg',
    'https://www.hyundai.com/content/dam/hyundai/tr/tr/images/find-a-car/pip/kona/kasim-2022/KONA-new-704x468.jpg'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prev = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  const next = () => {
    setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
  };


  return (
    <div className="carousel">
      <button onClick={prev}>&lt;</button>
      <div className='page1' >
        <h3>Medya Merkezi</h3>
        <p>Yerel|2023.04.18</p>
        <h4>Charge myHyundai, Avrupa’da 500.000 Şarj Noktasına Ulaştı.</h4>
        <button>Daha Fazla Yükle</button>
        <button>İncele</button>
      </div>
      <div className='page2' >
        <h3>Medya Merkezi</h3>
        <p>Yerel|2023.04.11</p>
        <h4>Hyundai 2030 Yılına Kadar İlk Üç Elektrikli Araç Üreticisinden Biri Olacak.</h4>
        <button>Daha Fazla Yükle</button>
        <button>İncele</button>
      </div>
      <div className='page3' >
        <h3>Medya Merkezi</h3>
        <p>Yerel|2023.04.06</p>
        <h4>Hyundai IONIQ 6 Dünyada Yılın Otomobili WCOTY Seçildi.</h4>
        <button>Daha Fazla Yükle</button>
        <button>İncele</button>
      </div>
      <div className='page4' >
        <h3>Medya Merkezi</h3>
        <p>Yerel|2023.03.30</p>
        <h4>Elektrifikasyonda Üst Düzey Performans: Hyundai IONIQ 5 N.</h4>
        <button>Daha Fazla Yükle</button>
        <button>İncele</button>
      </div>
      <div className='page5' >
        <h3>Medya Merkezi</h3>
        <p>Yerel|2023.03.22</p>
        <h4>Hyundai Elektrikli Araçlar İçin Otomatik Şarj Robotu Geliştirdi.</h4>
        <button>Daha Fazla Yükle</button>
        <button>İncele</button>
      </div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />

      <button onClick={next}>&gt;</button>
    </div>
  );
};

export default Carousel;
