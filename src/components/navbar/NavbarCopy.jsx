import React from 'react'

function NavbarCopy() {
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
    )
}

export default NavbarCopy