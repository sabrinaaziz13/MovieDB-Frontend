// import React, { useState, useEffect } from 'react'
// import './App.css'
// import MovieDetails from './components/MovieDetails'
// import {
//   Navbar,
//   Container,
//   Nav,
//   Form,
//   FormControl,
//   Button
// } from 'react-bootstrap'
// // import 'bootstrap/dist/css/bootsrap.min.css'

// const API_URL =
//   'https://api.themoviedb.org/3/movie/popular?api_key=12351e0a6e986dffd037f9e5d2d739d3'
// // const API_SEARCH =
// //   'https://api.themoviedb.org/3/search/movie?api_key=12351e0a6e986dffd037f9e5d2d739d3&query'

// function App() {
//   const [movies, setMovies] = useState([])
//   const [query, setQuery] = useState('')

//   useEffect(() => {
//     fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data)
//         setMovies(data.results)
//       })
//   }, [])

//   const searchMovie = async (e) => {
//     e.preventDefault()
//     console.log('Searching')
//     try {
//       const url = `https://api.themoviedb.org/3/search/movie?api_key=12351e0a6e986dffd037f9e5d2d739d3&query=${query}`
//       const res = await fetch(url)
//       const data = await res.json()
//       console.log(data)
//       setMovies(data.results)
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   const changeHandler = (e) => {
//     setQuery(e.target.value)
//   }
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Movie Db App</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#trending">Trending</Nav.Link>
//             <Nav.Link href="#favorites">Favorites</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>
//       <Form className="form" onSubmit={searchMovie}></Form>
//       <FormControl
//         type="search"
//         placeholder="Search Movies"
//         className="searchbar"
//         aria-label="search"
//         name="query"
//         value={query}
//         onChange={changeHandler}
//       ></FormControl>
//       <Button variant="secondary" type="submit">
//         Search
//       </Button>
//       {/* <Navbar bg="dark" expand="lg" variant="dark">
//         <Container fluid>
//           <Navbar.Brand href="/home">Movie Db App</Navbar.Brand>
//           <Navbar.Brand href="/home">Trending</Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="nbar"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             ></Nav>

//             <Form className="form" onSubmit={searchMovie}></Form>
//             <FormControl
//               type="search"
//               placeholder="Search Movies"
//               className="searchbar"
//               aria-label="search"
//               name="query"
//               value={query}
//               onChange={changeHandler}
//             ></FormControl>
//             <Button variant="secondary" type="submit">
//               Search
//             </Button>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar> */}
//       <div>
//         {movies.length > 0 ? (
//           <div className="container">
//             <div className="grid">
//               {movies.map((movieReq) => (
//                 <MovieDetails key={movieReq.id} {...movieReq} />
//               ))}
//             </div>
//           </div>
//         ) : (
//           <h2>Movie not found</h2>
//         )}
//       </div>
//     </>
//   )
// }

// export default App
