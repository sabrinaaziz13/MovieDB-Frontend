import React, { useState, useEffect } from 'react'
import MovieDetails from './MovieDetails'

function MovieAPI() {
  const API_URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=12351e0a6e986dffd037f9e5d2d739d3'

  const [movies, setMovies] = useState([])

  const fetching = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovies(data.results)
      })
  }

  useEffect(() => {
    fetching()
  }, [])
  console.log(movies)

  function loaded() {
    return (
      <div className="container">
        <div className="grid">
          {movies.map((movieReq, idx) => (
            <div key={idx}>
              <MovieDetails
                id={movieReq.id}
                title={movieReq.title}
                poster_path={movieReq.poster_path}
                vote_average={movieReq.vote_average}
                release_date={movieReq.release_date}
                overview={movieReq.overview}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return <div>{movies.length > 0 ? loaded() : <h2>Movie not found</h2>}</div>
}

export default MovieAPI
