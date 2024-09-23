import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  console.log(movies?.NowPlayingMovies?.results); 
  return (
    <div className='bg-black'>
      {/* 
        movielist
          -movieCard(movies set in India)
          movieCard(EastAsian Movies & TV)
          movieCard(New on Netflix)
          movieCard(Comedies)
          movieCard(Today's top Picks for You )
          movieCard(Your Next Watch)
       */}

       <MovieList title={"Movies set in India"} movies={movies?.NowPlayingMovies?.results}/>
       <MovieList title={"Trending"} movies={movies?.NowPlayingMovies?.results}/>
       <MovieList title={"Popular"} movies={movies?.NowPlayingMovies?.results}/>
       <MovieList title={"Upcoming Movies"} movies={movies?.NowPlayingMovies?.results}/>
       <MovieList title={"Horror"} movies={movies?.NowPlayingMovies?.results}/>
       <div className='-mt-48 bg-blue-600'></div>
    </div>
  )
}

export default SecondaryContainer;
