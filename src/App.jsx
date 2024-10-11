import React, { useState } from 'react';
import Movies_selector from './components/Movies_selector';
import Movies_slider from './components/Movies_slider';
import Navbar from './components/Navbar';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [MoviesSearch, setMoviesSearch] = useState(null); 
  const [selectedMovieDetails, setSelectedMovieDetails] = useState(null); // State for detailed movie data
  const [moviesCount, setMoviesCount] = useState(0);

  // console.log("=>" + imdbID)
 
  
  const fetchMovieDetails = (imdbID) => {
     console.log(`id : ${imdbID}`)
    fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=3bfe2da6`)  // Fetch movie details by ID
      .then((res) => res.json())
      .then((data) => {
        setSelectedMovieDetails(data);
        console.log("=>" + selectedMovieDetails)  // Set detailed movie data in state
      })
      .catch((error) => console.error('Error fetching detailed data:', error));
  };

  // State to hold selected movie
  console.log(selectedMovie)
  return (
    <>
      <Navbar moviesCount={moviesCount} setMoviesSearch={setMoviesSearch} />
      <div className='flex justify-center gap-3 align-middle self-center '>
        {/* Pass the function to update selected movie */}
        <Movies_selector setMoviesCount={setMoviesCount} fetchMovieDetails={fetchMovieDetails} MoviesSearch={MoviesSearch} setSelectedMovie={setSelectedMovie} />
  
        {/* Pass the selected movie to Movies_slider */}
        <Movies_slider selectedMovieDetails={selectedMovieDetails} selectedMovie={selectedMovie} />
      </div>
    </>
  );
}

export default App;
