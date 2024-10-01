import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useTvShows from "../hooks/useTvShows";
import lang from "../utils/LanguageConstants";
import MovieList from "./MovieList";
import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";

const TvShows = () => {
  useTvShows();
  const shows = useSelector((store) => store?.movies?.TvShows?.results);
  const langs = useSelector((store) => store.config.lang);
  const navigate = useNavigate();
  // console.log(shows[0].id);
  const [trailerKey, setTrailerKey] = useState(null);
  //fetch trailer video
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        shows[0].id +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const FilterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = FilterData ? FilterData[0] : json.results[0];
    setTrailerKey(trailer?.key);
    // console.log(trailer?.key);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div className="bg-black">
      
      <div className="flex justify-between bg-gradient-to-b from-black to-black ">
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
      <div className="absolute w-[100%] -mt-5 ">
      <iframe
        className="w-[100%] aspect-video "
        src={
          "https://www.youtube.com/embed/" + trailerKey + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      </div>
      <div className="mt-[600px] animate-slideIn">
        <MovieList title={lang[langs].moviesSetInIndia} movies={shows} />
        <MovieList title={lang[langs].trending} movies={shows} />
        <MovieList title={lang[langs].popular} movies={shows} />
        <MovieList title={lang[langs].upComingMovies} movies={shows} />
        <MovieList title={lang[langs].horror} movies={shows} />
      </div>
      <div className="-mt-48 bg-blue-600"></div>
    </div>
  );
};

export default TvShows;
