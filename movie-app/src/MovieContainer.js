import React from 'react'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieContainer = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview
}) => {
  return (
    <main>
      <div>
        <h1>{title}</h1>
        <img src={API_IMG + poster_path}></img>
        <h3>Rating: {vote_average}</h3>
        <h3>Release Date: {release_date}</h3>
        <p>{overview}</p>
      </div>
    </main>
  )
}

export default MovieContainer
