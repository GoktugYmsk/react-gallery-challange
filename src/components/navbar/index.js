import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';

import './index.css'

function NavbarHyundai({ selectedCar, navigate, setcloseCarPage }) {
    const imageLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_pHJvy-y5jCaMIjVnxuvlg_sCTlzKjRKSw&usqp=CAU'

    
    const handleClick = () => {
        navigate('/Hyundai');
    }

    return (
        <>
            <Navbar className={`navbar ${selectedCar ? 'selected' : ''}`} variant="dark">
                <Container className='navbarContainer' >
                    <Nav className="me-auto">
                        <img onClick={handleClick} className='navbarLogo' src={imageLogo} />
                        <div className='navlinkPart' >
                            <Nav.Link className='modeller' href="#home">Modeller</Nav.Link>
                            <Nav.Link className='entrikifasyon' style={{ color: 'rgb(0, 170, 210)' }} >Entrikifasyon Teknolojisi</Nav.Link>
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