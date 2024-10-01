import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import lang from '../utils/LanguageConstants';

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movies);
  // console.log(movies); 

  const langs=useSelector(store=>store.config.lang);


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

       <div className='animate-scaleUp'>
       <MovieList title={lang[langs].moviesSetInIndia} movies={movies?.NowPlayingMovies?.results}/>
       <MovieList title={lang[langs].trending} movies={movies?.NowPlayingMovies?.results}/>
       <MovieList title={lang[langs].popular} movies={movies?.PopularMovies?.results}/>
       <MovieList title={lang[langs].upComingMovies} movies={movies?.NowPlayingMovies?.results}/>
       <MovieList title={lang[langs].horror} movies={movies?.NowPlayingMovies?.results}/>
       </div>
       <div className='-mt-48 bg-blue-600'></div>
    </div>
  )
}

export default SecondaryContainer;
