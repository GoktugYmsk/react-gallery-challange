import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { setcloseCarPage, setSales } from '../configure/configure';

import './index.css';

function NavbarHyundai({ selectedCar, navigate }) {
  const imageLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_pHJvy-y5jCaMIjVnxuvlg_sCTlzKjRKSw&usqp=CAU';
  const [active, setActive] = useState(false);
  const [activeAbout, setActiveAbout] = useState(false);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setcloseCarPage(true));
    dispatch(setSales(false));
    navigate('/Hyundai');
  };

  const openDropdown = () => {
    setActive(true);
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
      setActiveAbout(false);
    }
  };

  const openAbout = () => {
    setActiveAbout(true);
  };

  const salesActive = () => {
    dispatch(setSales(true));
    navigate('/salesScreen');
    dispatch(setcloseCarPage(false));
  };

  return (
    <div className='row' >
      <div className='col-12 navbar__main' >
        <Navbar className={`navbar ${selectedCar ? 'selected' : ''}`} variant="dark">
          <Container fluid>
            <Navbar.Brand href="#home">
              <img onClick={handleClick} className="navbarLogo" src={imageLogo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Modeller</Nav.Link>
                <Nav.Link onClick={openDropdown} style={{ color: 'rgb(0, 170, 210)' }}>
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
                <Nav.Link onClick={openAbout} className="about" href="#pricing">
                  Hakkımızda
                </Nav.Link>
                {activeAbout && (
                  <div ref={dropdownRef} className="dropdown">
                    <div className="dropdown-item-about">Özellik 1</div>
                    <div className="dropdown-item-about">Özellik 2</div>
                    <div className="dropdown-item-about">Özellik 3</div>
                  </div>
                )}
                <Nav.Link onClick={salesActive} className="nav-link-mobile">
                  Yetkili Satıcı ve Servis
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarHyundai;
