import React from 'react'
import HeaderLogo from '../assets/moviedb2.png'
import { Navbar, Nav } from 'react-bootstrap'

function Header() {
  return (
    <>
      <div className="navbar">
        <Navbar bg="dark" variant="dark">
          <Nav className="nav-ul">
            <Navbar.Brand className="logo" href="/">
              <img src={HeaderLogo} height="100" />
            </Navbar.Brand>
            <Navbar.Brand className="nav-li" href="/">
              Movie Lovers
            </Navbar.Brand>
            <Nav.Link className="nav-li" href="/trending">
              Trending
            </Nav.Link>
            <Nav.Link className="nav-li" href="/favorites">
              Favorites
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    </>
  )
}

export default Header
