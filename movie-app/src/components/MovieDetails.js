import React from 'react'
import { Link } from 'react-router-dom'
const API_IMG = 'https://image.tmdb.org/t/p/w500/'
const API_ID = `https://api.themoviedb.org/3/movie/${props.id}`

const MovieDetails = (props) => {
  return (
    <main>
      <div className="card text-center bg-secondary mb-3">
        <div className="card-body">
          {/* <img
            className="card-img-top"
            style={{ width: '28rem' }}
            src={API_IMG + props.poster_path}
          /> */}
          <div className="card-body">
          <Link>
          {/* <a href={API_ID + props.id}></a> */}
          <h3 id={props.id}>{props.title}</h3>
          </Link>
          <a href=""><img className="card-img-top" src={API_IMG + props.poster_path} alt={props.title}/></a>
            {/* <h4>Rating: {props.vote_average}</h4>
            <h5>Release Date: {props.release_date}</h5>
            <br></br>
            <h6>Overview</h6>
            <p>{props.overview}</p> */}
          </div>
        </div>
      </div>
    </main>
  )
}

export default MovieDetails
