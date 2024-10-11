// import React from 'react';

// const Movies_slider = ({ selectedMovie , selectedMovieDetails}) => {
//   const stars = Array(5).fill("✩");
//   console.log("=> " + selectedMovieDetails)

//   const handlestars = (index) => {
        
//   }

//   return (
//     <div className='h-[80vh] bg-zinc-900 w-[25vw] rounded-xl overflow-hidden'>
//       {selectedMovieDetails ? (
//         <div className='bg-zinc-700 h-full mx-2 my-2 rounded-lg flex flex-col gap-10'>
//           <div className="flex gap-5 p-5">
//             <img 
//               src={selectedMovieDetails.Poster !== 'N/A' ? selectedMovieDetails.Poster : 'https://via.placeholder.com/100x150'} 
//               alt={selectedMovieDetails.Title} 
//               className='w-[100px] h-[150px]'
//             />
//             <div className="flex flex-col justify-center">
//               <h3 className='mb-2 font-semibold text-lg'>{selectedMovieDetails.Title.slice(0, 20)}</h3>
//               <p>
//               🗓️   {selectedMovieDetails.Released ? selectedMovieDetails.Released : 'Release Date N/A'} 
//                 {' . '}
//                 {selectedMovieDetails.Runtime ? selectedMovieDetails.Runtime : 'Runtime N/A'}
//               </p>
//               <p>
//               🚀 {selectedMovieDetails.Genre ? selectedMovieDetails.Genre : 'Genre N/A'}
//               </p>
//               <p>
//               ⭐ {selectedMovieDetails.imdbRating ? `${selectedMovieDetails.imdbRating} IMDB Rating` : 'Rating N/A'}
//               </p>
//             </div>
//           </div>

//           <div className='bg-zinc-800 h-11 mx-12 gap-3 flex justify-center items-center rounded-lg'>
//             {
//               stars.map((star, i) => (
//                 <span onClick={handlestars(i)} className='text-2xl cursor-pointer' key={i}>{star}</span>
//               ))
//             }
//           </div>

//           <div className="flex flex-col gap-5 items-start mx-12">
//             <p>
//               <em>
//                 {selectedMovieDetails.Plot ? selectedMovieDetails.Plot : 'Plot information not available.'}
//               </em>
//             </p>
//             <p>
//               Starring: {selectedMovieDetails.Actors ? selectedMovieDetails.Actors : 'N/A'}
//             </p>
//             <p>
//               Directed by: {selectedMovieDetails.Director ? selectedMovieDetails.Director : 'N/A'}
//             </p>
//           </div>
//         </div>
//       ) : (
//         <div className='py-2 px-3 flex mx-2 my-2 rounded-lg items-center justify-start gap-5 cursor-pointer flex-col bg-zinc-600'>
//           <h1>MOVIES YOU WATCHED</h1>
//           <div className="flex justify-evenly gap-5">
//             <p>📽️ 0 movies</p>
//             <p>⭐ 0.0</p>
//             <p>🌟 0.0</p>
//             <p>⏳ 0 min</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Movies_slider;

import React, { useEffect, useState } from 'react';

const Movies_slider = ({ selectedMovie, selectedMovieDetails }) => {
  const maxStars = 5; // Maximum number of stars
  const [rating, setRating] = useState(0); // State to store the current rating

  // Load saved rating from localStorage when the component mounts
  useEffect(() => {
    if (selectedMovie) {
      const savedRating = localStorage.getItem(selectedMovie.imdbID);
      if (savedRating) {
        setRating(parseInt(savedRating, 10)); // Parse and set the saved rating
      }
    }
  }, [selectedMovie]);

  // Handle star click
  const handlestars = (index) => {
    setRating(index + 1); // Set the rating based on the clicked star
    if (selectedMovie) {
      localStorage.setItem(selectedMovie.imdbID, index + 1); // Save the rating to localStorage
    }
  };

  // Create stars (filled or empty) based on the rating
  const stars = Array.from({ length: maxStars }, (_, index) => (
    <span
      key={index}
      onClick={() => handlestars(index)} // Set the rating when a star is clicked
      className='text-2xl cursor-pointer'
    >
      {index < rating ? '⭐' : '✩'} {/* Filled or empty star */}
    </span>
  ));

  return (
    <div className='h-[80vh] bg-zinc-900 w-[25vw] rounded-xl overflow-hidden'>
      {selectedMovieDetails ? (
        <div className='bg-zinc-700 h-full mx-2 my-2 rounded-lg flex flex-col gap-10'>
          <div className="flex gap-5 p-5">
            <img
              src={selectedMovieDetails.Poster !== 'N/A' ? selectedMovieDetails.Poster : 'https://via.placeholder.com/100x150'}
              alt={selectedMovieDetails.Title}
              className='w-[100px] h-[150px]'
            />
            <div className="flex flex-col justify-center">
              <h3 className='mb-2 font-semibold text-lg'>{selectedMovieDetails.Title.slice(0, 20)}</h3>
              <p>
                🗓️ {selectedMovieDetails.Released ? selectedMovieDetails.Released : 'Release Date N/A'}
                {' . '}
                {selectedMovieDetails.Runtime ? selectedMovieDetails.Runtime : 'Runtime N/A'}
              </p>
              <p>
                🚀 {selectedMovieDetails.Genre ? selectedMovieDetails.Genre : 'Genre N/A'}
              </p>
              <p>
                ⭐ {selectedMovieDetails.imdbRating ? `${selectedMovieDetails.imdbRating} IMDB Rating` : 'Rating N/A'}
              </p>
            </div>
          </div>

          <div className='bg-zinc-800 h-11 mx-12 gap-3 flex justify-center items-center rounded-lg'>
            {stars}
          </div>

          <div className="flex flex-col gap-5 items-start mx-12">
            <p>
              <em>
                {selectedMovieDetails.Plot ? selectedMovieDetails.Plot : 'Plot information not available.'}
              </em>
            </p>
            <p>
              Starring: {selectedMovieDetails.Actors ? selectedMovieDetails.Actors : 'N/A'}
            </p>
            <p>
              Directed by: {selectedMovieDetails.Director ? selectedMovieDetails.Director : 'N/A'}
            </p>
          </div>
        </div>
      ) : (
        <div className='py-2 px-3 flex mx-2 my-2 rounded-lg items-center justify-start gap-5 cursor-pointer flex-col bg-zinc-600'>
          <h1>MOVIES YOU WATCHED</h1>
          <div className="flex justify-evenly gap-5">
            <p>📽️ 0 movies</p>
            <p>⭐ 0.0</p>
            <p>🌟 0.0</p>
            <p>⏳ 0 min</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies_slider;

