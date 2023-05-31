import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ShowMovie() {
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'
  const [movie, setMovie] = useState(null)
  const { id } = useParams()
  const API_ID = `https://api.themoviedb.org/3/movie/${id}?api_key=12351e0a6e986dffd037f9e5d2d739d3`

  useEffect(() => {
    const fetchShowMovie = () => {
      fetch(API_ID)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data)
        })
    }
    fetchShowMovie()
  }, [])

  if (!movie) {
    return <p>Loading movie information...</p>
  }

  return (
    <div className="movie">
      <h1>{movie.title}</h1>
      <img
        className="card-img-top"
        src={API_IMG + movie.poster_path}
        alt={movie.title}
      />
      <h3>Rating: {movie.vote_average}</h3>
      <h3>Release Date: {movie.release_date}</h3>

      <h3>Overview:</h3>
      <p>{movie.overview}</p>
    </div>
  )
}

export default ShowMovie
