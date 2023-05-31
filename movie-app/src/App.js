import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import MovieAPI from './components/MovieAPI'
import ShowMovie from './components/ShowMovie'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieAPI />} />
          <Route path="/details/:id" element={<ShowMovie />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
