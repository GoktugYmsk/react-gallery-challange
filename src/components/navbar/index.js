import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { setcloseCarPage } from '../configure/configure';

import './index.css';

function NavbarHyundai({ selectedCar, navigate }) {
  const imageLogo =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_pHJvy-y5jCaMIjVnxuvlg_sCTlzKjRKSw&usqp=CAU';
  const [active, setActive] = useState(false);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setcloseCarPage(true));
    navigate('/Hyundai');
  };

  const openDropdown = () => {
    setActive(true);
  };

  const closeDropdown = () => {
    setActive(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setActive(false);
    }
  };

  return (
    <>
      <Navbar className={`navbar ${selectedCar ? 'selected' : ''}`} variant="dark">
        <Container className="navbarContainer">
          <Nav className="me-auto">
            <img onClick={handleClick} className="navbarLogo" src={imageLogo} />
            <div className="navlinkPart">
              <Nav.Link className="modeller" href="#home">
                Modeller
              </Nav.Link>
              <Nav.Link
                onClick={openDropdown}
                className="entrikifasyon"
                style={{ color: 'rgb(0, 170, 210)' }}
              >
                Entrikifasyon Teknolojisi
              </Nav.Link>
              {active && (
                <div ref={dropdownRef} className="dropdown">
                  <div className="dropdown-item">Özellik 1</div>
                  <div className="dropdown-item">Özellik 2</div>
                  <div className="dropdown-item">Özellik 3</div>
                </div>
              )}
              <Nav.Link href="#features">Satış</Nav.Link>
              <Nav.Link href="#pricing">Satış Sonrası</Nav.Link>
              <Nav.Link href="#pricing">Hakkımızda</Nav.Link>
              <Nav.Link href="#pricing">Yetkili Satıcı ve Servis</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarHyundai;
