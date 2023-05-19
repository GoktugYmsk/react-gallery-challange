import React, { useState } from 'react';

import './index.css'

function Carousel() {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    {
      title: 'Medya Merkezi',
      content: 'Charge myHyundai, Avrupa’da 500.000 Şarj Noktasına Ulaştı.',
      date: 'Yerel | 2023.04.18',
    },
    {
      title: 'Medya Merkezi',
      content: 'Hyundai 2030 Yılına Kadar İlk Üç Elektrikli Araç Üreticisinden Biri Olacak.',
      date: 'Yerel | 2023.04.11',
    },
    {
      title: 'Medya Merkezi',
      content: 'Hyundai IONIQ 6 Dünyada Yılın Otomobili WCOTY Seçildi.',
      date: 'Yerel | 2023.04.06',
    },
    {
      title: 'Medya Merkezi',
      content: 'Elektrifikasyonda Üst Düzey Performans: Hyundai IONIQ 5 N.',
      date: 'Yerel | 2023.03.30',
    },
    {
      title: 'Medya Merkezi',
      content: 'Hyundai Elektrikli Araçlar İçin Otomatik Şarj Robotu Geliştirdi.',
      date: 'Yerel | 2023.03.22',
    }
  ];

  const prev = () => {
    setCurrentPage(currentPage === 0 ? pages.length - 1 : currentPage - 1);
  };

  const next = () => {
    setCurrentPage(currentPage === pages.length - 1 ? 0 : currentPage + 1);
  };

  return (
    <div className='row' >
      <div className=" col-12 col-lg-12 carouselFooterPage">
        <button className='carouselPrew' onClick={prev}>&lt;</button>
        <div className="pageCarousel">
          <h3>{pages[currentPage].title}</h3>
          <br />
          <p>{pages[currentPage].date}</p>
          <br />
          <h5>{pages[currentPage].content}</h5>
          <div className='buttonControl' >
            <button className='carouselAddButton' >Daha Fazla Yükle</button>
            <button className='carouselInspectButton' >İncele</button>
          </div>
        </div>
        <button className='carouselNext' onClick={next}>&gt;</button>
        <div className="pagination">
          {pages.map((_, index) => (
            <div
              key={index}
              className={`page ${currentPage === index ? "active" : ""}`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
