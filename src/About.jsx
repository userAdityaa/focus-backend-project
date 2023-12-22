// Home.jsx
import React from 'react';
import { useState } from 'react';
import axios from 'axios';



function About(){


    const [movies, setMovies] = useState([]);
    // const apiKey = '1c7d42abf229af75962d9c1185bd9ad9';
    const [quari, setQuery] = useState('');

    const handleQuery = (e) => {
      setQuery(e.target.value);
      // console.log(quari);
      fetchMovies(quari);
    }


    const fetchMovies = async (quari) => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1c7d42abf229af75962d9c1185bd9ad9&query=${quari}`, {
        
        });
        // console.log("idhar araha hain na tu toh ");
        console.log(response.data.results);
        setMovies(response.data.results);
        // setMovies(response.data);
        } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    

  

  return (
    <>

<form className='bg-[#111827] h-screen py-[5rem]' onSubmit={e => e.preventDefault()}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative w-[60rem] mx-auto">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" value={quari} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search films, webseries, animes.." required onChange={handleQuery}/>
        <button type='button' className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        
    </div>

    <ul>
      {movies.map((container) => <li className='text-lime-500'>{container.original_title}</li>)}
    </ul>

</form>

    

    </>
  );
};

export default About
