import React, { useState, useEffect } from 'react'
import './App.css'
import MovieContainer from './MovieContainer'
// import 'bootstrap/dist/css/bootsrap.min.css'

const API_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=12351e0a6e986dffd037f9e5d2d739d3'
function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      })
  }, [])

  return (
    <div className="container">
        <div className="grid">
        {movies.map((movieReq) => (
        <MovieContainer key={movieReq.id} {...movieReq} />))}
        </div>
    </div>
  )
}

export default App
