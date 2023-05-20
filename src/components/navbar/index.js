import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { setcloseCarPage, setSales } from '../configure/configure';

import '../navbar/index.scss';

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

  const salesActive = () => {
    dispatch(setSales(true));
    navigate('/salesScreen');
    dispatch(setcloseCarPage(false));
  };

  return (
    <Navbar className={`navbar ${selectedCar ? 'selected' : ''}`} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img onClick={handleClick} className="navbarLogo" src={imageLogo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='navbar__tag' href="#home">Modeller</Nav.Link>
            <Nav.Link className='navbar__tag' href="#link">Satış</Nav.Link>
            <Nav.Link className='navbar__tag' href="#link">Satış Sonrası</Nav.Link>
            <Nav.Link className='navbar__tag' href="#link">Hakkımızda</Nav.Link>
            <Nav.Link className='navbar__tag' href="#link">Yetkili Satıcı ve Servis</Nav.Link>
            <NavDropdown className='navbar__dropdown' title="Entrikifasyon Teknolojisi" id="basic-nav-dropdown">
              <NavDropdown.Item className='navbar__tag' href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default NavbarHyundai
