import React, { useState } from "react";
import Popcorn from '../assets/images/popcorn.png'

const Navbar = ({setMoviesSearch, moviesCount}) => {

  // const [searchTerm, setSearchTerm] = useState('intersellar');

  return (
    <nav className="bg-violet-600 m-3 mx-9 rounded-lg">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex gap-1 align-middle justify-center">
          <img src={Popcorn} alt="Popcorn" className="w-7 h-7" />
          <h2 className="text-zinc-100 font-bold">usePopcorn</h2>
          </div> 
          <div className="flex justify-center items-center ">
            <input
              onChange={(e) => setMoviesSearch(e.target.value)}
              type="text"
              placeholder="Search movies..."
              className="bg-violet-500 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           
          </div>
          <h2 className="text-zinc-100 text-[1vw] font-semibold">Found { moviesCount} Top Results</h2>


        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
