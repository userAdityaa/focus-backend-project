// Home.jsx
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact'
// import { set } from 'mongoose';



function About(){
  const navigate = useNavigate();
  const handleClick = (dataStore) => {
    console.log(dataStore.title);
    console.log(dataStore.poster_path);
    console.log(dataStore.overview);
    console.log(dataStore.vote_average);
  }


  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [quari, setQuery] = useState('');

    const handleQuery = async(e) => {
      setQuery(e.target.value);
      await fetchMovies(quari);
    }


    const fetchMovies = async (quari) => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=1c7d42abf229af75962d9c1185bd9ad9&query=${quari}`, {
        
        });
        // console.log("idhar araha hain na tu toh ");
        console.log(response.data.results);
        setMovies(response.data.results);
        // movies.map((genre) => fetchGenres(genre.genre_ids));
        movies.forEach(movie => {
          fetchGenres(movie.genre_ids); // Pass movie.id to fetchGenres
        });
        } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


  const fetchGenres = async (movieId) => {
    try{
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=1c7d42abf229af75962d9c1185bd9ad9`);
      // setGenres(response.data.genre_ids);
      // console.log(response.data.genres);
      setGenres(response.data.genres);
      
    }
    catch(err){
      console.log(err);
    }
  }

    

  

  return (
    <>

<form className='bg-[url(bg2.webp)] h-screen py-[5rem]' onSubmit={e => e.preventDefault()}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative w-[60rem] mx-auto">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" id="search" value={quari} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search films, webseries, animes.." required onChange={handleQuery}/>
       
        <button type='button' className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        
    </div>

    <div className='w-screen bg-[url(bg2.webp)] p-6 rounded-md shadow-md flex items-center flex-col'>
      <div className='bg-[url(bg2.webp)] p-4 w-[70%] flex items-start'>
      <ul className='flex flex-col items-center space-y-[3rem] list-inside w-[40%]'>
        {movies.map((container) => 

        

        
        <li className='text-lime-500 border border-amber-800 border-[1rem]' key={container.id}><img  className='w-[20rem]' src={`https://www.themoviedb.org/t/p/w440_and_h660_bestv2${container.poster_path}`}alt="" onClick={() => handleClick(container)}/></li>

  
        )}
      </ul>
      <ul className='w-[60%] space-y-[3rem] text-white text-bold '>
        {movies.map((store) => <li className='h-[32rem] w-[90%] flex flex-col ml-[2rem] border border-amber-800 border-[1rem] p-[2rem]' key={store.key}>
          <div className='mb-[1.5rem]'>Title: {store.title ? store.title : store.name}</div> 
          <div className='mb-[1.5rem]'>
            <div>Description: </div>
            <div>{store.overview} </div>
            </div>
          <div className='mb-[1.5rem]'>Ratings: {store.vote_average}</div>
          <div>Genre: {genres.map((genre) => <span className='ml-[0.5rem]'>{genre.name}</span>)}</div>
          </li>)}
      </ul>
      </div>
    </div>

</form>

    

    </>
  );
};

export default About
