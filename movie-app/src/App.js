import React, { useState, useEffect } from 'react'
import './App.css'
import MovieContainer from './MovieContainer'

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
    <div>
      {movies.map((movieReq) => (
        <MovieContainer key={movieReq.id} {...movieReq} />
      ))}
    </div>
  )
}

export default App
