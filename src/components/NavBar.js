import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

const NavBar = () => {
  return (
        <nav className="bg-color">
          <Navbar collapseOnSelect expand="lg">
              <Navbar.Brand className="logo" href="#/"><span className="p">P</span><span className="m">M</span><span className="m">M</span><span className="p">P</span></Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto brands">
                      <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/culturalconcerts/?epa=SEARCH_BOX">
                          <FontAwesomeIcon icon={faFacebookSquare} />
                      </Nav.Link>
                  </Nav>
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
