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
              <Navbar.Brand href="#home">Movie Db App</Navbar.Brand>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#trending">Trending</Nav.Link>
              <Nav.Link href="#favorites">Favorites</Nav.Link>
              <Navbar.Brand href="#home">
                <img src={HeaderLogo} height="100" />
              </Navbar.Brand>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header
