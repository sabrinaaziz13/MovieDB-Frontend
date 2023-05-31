import React,  {useState, useEffect} from 'react'
import MovieDetails from './MovieDetails'

const API_URL =
'https://api.themoviedb.org/3/movie/popular?api_key=12351e0a6e986dffd037f9e5d2d739d3'

function MovieAPI() {

  const [movies, setMovies] = useState([])

  const fetching=()=>{
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

  return (
    <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieDetails id={movieReq.id} title={movieReq.title} poster_path={movieReq.poster_path} vote_average={movieReq.vote_average} release_date={movieReq.release_date} overview={movieReq.overview}/>
              ))}
            </div>
          </div>
        ) : (
          <h2>Movie not found</h2>
        )}
      </div>
  )
}

export default MovieAPI