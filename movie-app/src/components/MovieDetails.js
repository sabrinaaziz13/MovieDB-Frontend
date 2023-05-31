import React from 'react'
import { Link } from 'react-router-dom'
// const API_ID = `https://api.themoviedb.org/3/movie/${id}`

const MovieDetails = (props) => {
  
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'

  return (
    <main>
      <div className="card text-center bg-secondary mb-3">
        <div className="card-body">
          <div className="card-body">
            <Link to={`/details/${props.id}`} key={props.id}>
              <h3 id={props.id}>{props.title}</h3>
              <img
                className="card-img-top"
                src={API_IMG + props.poster_path}
                alt={props.title}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MovieDetails
