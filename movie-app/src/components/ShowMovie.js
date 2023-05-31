import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


function ShowMovie() {
  const {id} = useParams()
  const API_ID = `https://api.themoviedb.org/3/movie/${id}`





  return (
    <div>ShowMovie</div>
  )
}

export default ShowMovie