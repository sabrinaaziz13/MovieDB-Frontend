import React from 'react'
import './App.css'
import {
  Navbar,
  Container,
  Nav,
} from 'react-bootstrap'
import MovieAPI from './components/MovieAPI'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie Db App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#trending">Trending</Nav.Link>
            <Nav.Link href="#favorites">Favorites</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <MovieAPI />
      </div>
    </>
  )
}

export default App
