import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePageFooter from "./HomePageFooter";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const MoviePage = () => {
  useNowPlayingMovies();
  const location = useLocation();
  const { movieId } = useParams();
  console.log({ movieId });

  const movies = useSelector(
    (store) => store?.movies?.NowPlayingMovies?.results
  );

  console.log({ movies });
  const navigate=useNavigate();
  const selectedMovie = movies.filter(
    (movie) => movieId === movie.id.toString()
  );
  console.log({ selectedMovie });
  console.log(selectedMovie[0].title);  

  return (
    <div className="animate-scaleUp">
      {/* Base Header */}
      <div className="flex justify-between bg-gradient-to-b from-red-600 to-black ">
        <div className="px-8 py-3 flex animate-scaleUp">
          <img className="w-44 " src={LOGO} alt="Netflix-logo" />
        </div>
        <div className="my-2 flex justify-between">
          <ul className="flex">
            <li className="p-3 m-3 text-white text-2xl cursor-pointer animate-fadeIn" onClick={()=>navigate("/browse")}>Home</li>
            <li className="p-3 m-3 text-white text-2xl cursor-pointer animate-fadeIn">
              Movies
            </li>
            <li className="p-3 m-3 text-white text-2xl cursor-pointer animate-fadeIn">
              TV Shows
            </li>
            <li className="p-3 m-3 text-white text-2xl cursor-pointer animate-fadeIn">
              Reviews
            </li>
          </ul>
        </div>
      </div>

      {/* Sub Header */}
      <div className="flex justify-center bg-gradient-to-b from-black to-cyan-600 mt-2 ">
        <div className="my-2 flex justify-between">
          <ul className="flex">
            <li className="p-0 m-2 text-white text-xl cursor-pointer">
              Overview
            </li>
            <li className="p-0 m-2 text-white text-xl cursor-pointer">Media</li>
            <li className="p-0 m-2 text-white text-xl cursor-pointer">
              Fandom
            </li>
            <li className="p-0 m-2 text-white text-xl cursor-pointer">Share</li>
          </ul>
        </div>
      </div>

      {/* Image with Text Overlay */}
      <div className="relative mt-20">
        {/* Blur Overlay */}
        <div className="absolute -inset-0 bg-sky-300 opacity-60 z-10 "></div>

         
          <img
            className="w-[100%] h-[600px] object-cover"
            alt="movie-img"
            src={
              "https://image.tmdb.org/t/p/w500" + selectedMovie[0].poster_path
            }
          />


        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-row justify-start z-20 p-4 animate-slideIn ">
          <div className=" ml-20 mt-2 mr-11 w-[350px] h-[550px] border-white border-[2px] rounded-xl ">
            <img className=" w-[350px] h-[550px] rounded-xl" alt="poster-img" src={"https://image.tmdb.org/t/p/w500" + selectedMovie[0].poster_path} />
          </div>
          <div className="justify-start">
            <h1 className="text-black text-6xl font-serif font-bold flex flex-col ml-11 mt-5 ">
              {selectedMovie[0].title}
            </h1>
            <p className="ml-11 mt-2 font-semibold text-lg">U {selectedMovie[0].release_date} (IN) Animation,Action,Adventure,Science Fiction . </p>
            <button className="bg-blue-950 text-xl text-white rounded-xl p-2 mt-5 ml-9 animate-bounce">What's your vibe? </button>
            <ul>
              <l1></l1>
              <l1></l1>
              <l1></l1>

            </ul>
            <p className="font-semibold text-2xl text-white ml-11 mt-24 animate-fadeIn">More than one wears the mask</p>
            <h3 className="font-bold text-3xl ml-11 my-2">Overview</h3>
            <p className="text-black text-[25px] font-serif ml-11  max-w-3xl animate-slideIn ">
              {selectedMovie[0].overview}
            </p>
          </div>
        </div>
      </div>
        <HomePageFooter/>
    </div>
  );
};

export default MoviePage;
