import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logo from './images/Logo.png'

const NavBar = () => {
  return (
        <nav className="bg-color">
          <Navbar collapseOnSelect expand="lg">
              <Navbar.Brand href="#/"><img className="logo" src={Logo} alt="logo"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto"></Nav>
                  <Nav>
                      <Nav.Link href="#/about-us">About Us</Nav.Link>
                      <Nav.Link href="#/artists">Artists</Nav.Link>
                      <Nav.Link href="#/archive">Archive</Nav.Link>
                      <NavDropdown title="Gallery" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#/images">Images</NavDropdown.Item>
                        <NavDropdown.Item href="#/videos">Videos</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#/contacts">Contacts</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        </nav>
  )
}

export default NavBar
