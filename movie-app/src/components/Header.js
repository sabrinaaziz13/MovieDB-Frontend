import React from 'react'
import HeaderLogo from '../assets/moviedb2.png'
import { Navbar, Container, Nav } from 'react-bootstrap'

function Header() {
  return (
    <>
      <div className="nav">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Navbar.Brand href="#home">
                <img src={HeaderLogo} height="100" />
              </Navbar.Brand>
              <Navbar.Brand href="/">Movie Lovers</Navbar.Brand>
              <Nav.Link href="/trending">Trending</Nav.Link>
              <Nav.Link href="/favorites">Favorites</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header
