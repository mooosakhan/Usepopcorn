import React, { useEffect, useState } from 'react';
import inception from '../assets/images/inception.webp';
import Loader from './loader';
import NoMovies from '../assets/images/no_movies.svg'

const Movies_selector = ({ setSelectedMovie, MoviesSearch, fetchMovieDetails , setMoviesCount  }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false); // Add loading state



  useEffect(() => {
    if (MoviesSearch) {
      setLoading(true); // Start loading when fetching begins
      fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=3bfe2da6&s=${MoviesSearch}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.Search) {
            setMovies(data.Search); // Set the movie list
            setMoviesCount(data.Search.length);
          } else {
            console.error('No movies found');
            setMovies([]); // Clear movies if nothing is found
            setMoviesCount(0); // Reset count when no movies found
          }
          setLoading(false); // Stop loading after fetching
        })
        .catch((error) => {
          console.error('Error fetching the data:', error);
          setLoading(false); // Stop loading on error
        });
    } else {
      setMovies([]); // Clear the movie list if the search term is empty
      setMoviesCount(0); // Clear movies and reset count
    }
  }, [MoviesSearch,setMoviesCount]);

  return (
    <div className='h-[80vh] bg-zinc-900 w-[25vw] rounded-xl overflow-y-auto'>
      {loading ? (
        <div className='flex justify-center items-center'>
          <Loader /> {/* Show loader while fetching */}
        </div>
      ) : (
        <>
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <div 
                key={index} 
                className="bg-zinc-700 py-2 px-3 mx-2 my-2 rounded-lg flex items-center justify-start gap-5 cursor-pointer"
                onClick={() => {
                  fetchMovieDetails(movie.imdbID);
                  setSelectedMovie(movie);

                    // Set selected movie
                  // fetchMovieDetails(movie.imdbID); // Fetch detailed movie info on click
                }}
                
              >
                <img 
                  src={movie.Poster !== 'N/A' ? movie.Poster : inception} 
                  alt={movie.Title} 
                  className="w-9 h-12 self-center" 
                />
                <div className="flex justify-start flex-col">
                  <h3 className='font-semibold text-lg'>{movie.Title}</h3>
                  <p className='text-md'>🗓️ {movie.Year}</p>
                </div>
              </div>
            ))
          ) : (
            <div className='h-full flex justify-center align-middle  text-white'>
             <img src={NoMovies} alt="No Movies" className='w-1/2 h-auto' />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Movies_selector;
