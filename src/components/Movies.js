import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import lang from "../utils/LanguageConstants";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const movies = useSelector((store) => store.movies);
  const langs = useSelector((store) => store.config.lang);
  const navigate = useNavigate();
  return (
    <div className="bg-black">
      <div className="flex justify-between bg-gradient-to-b from-black to-black">
        <div className="px-8 py-3 flex">
          <img className="w-44" src={LOGO} alt="Netflix-logo" />
        </div>
        <div className="my-2 flex justify-between">
          <ul className="flex">
            <li
              className="p-3 m-3 text-white text-2xl cursor-pointer"
              onClick={() => navigate("/browse")}
            >
              Home
            </li>
            <li
              className="p-3 m-3 text-white text-2xl cursor-pointer"
              onClick={() => navigate("/movies")}
            >
              Movies
            </li>
            <li
              className="p-3 m-3 text-white text-2xl cursor-pointer"
              onClick={() => navigate("/tvshows")}
            >
              TV Shows
            </li>
            <li className="p-3 m-3 text-white text-2xl cursor-pointer">
              Reviews
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-60 object-full animate-scaleUp">
        <MovieList
          title={lang[langs].moviesSetInIndia}
          movies={movies?.NowPlayingMovies?.results}
        />
        <MovieList
          title={lang[langs].trending}
          movies={movies?.NowPlayingMovies?.results}
        />
        <MovieList
          title={lang[langs].popular}
          movies={movies?.PopularMovies?.results}
        />
        <MovieList
          title={lang[langs].upComingMovies}
          movies={movies?.NowPlayingMovies?.results}
        />
        <MovieList
          title={lang[langs].horror}
          movies={movies?.NowPlayingMovies?.results}
        />
      </div>
      <div className="-mt-48 bg-blue-600"></div>
    </div>
  );
};

export default Movies;
