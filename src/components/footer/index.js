import React from 'react';
import './index.css';

function Footer() {
  return (
    <footer className="footer-container">
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
    </footer>
  );
}

export default Footer;
