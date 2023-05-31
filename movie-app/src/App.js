import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import { Navbar, Container, Nav } from 'react-bootstrap'
import Home from './components/Home'
import MovieAPI from './components/MovieAPI'
import ShowMovie from './components/ShowMovie'
import Header from './components/Header'

function App() {
  return (
    <>
    <Header/>
    {/* <div className="nav">
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
      </div> */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieAPI />} />
          <Route path="/details/:id" element={<ShowMovie />} />
        </Routes>
      </div>
    </>
  )
}

export default App
