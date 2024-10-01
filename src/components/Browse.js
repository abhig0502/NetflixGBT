import React from "react";
import BaseHeader from "./BaseHeader";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import { useState } from "react";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../utils/ConfigSlice";
import lang from "../utils/LanguageConstants";
import useTvShows from "../hooks/useTvShows";

const Browse = () => {
  const [searchText, setSearchText] = useState(null);
  const navigate = useNavigate();
  // const movies=useSelector((Store)=>Store?.movies?.NowPlayingMovies?.results);
  // console.log(movies);
  //   console.log(user);
  const dispatch = useDispatch();
  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };
  const langs = useSelector((store) => store.config.lang);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useNowPlayingMovies();
  usePopularMovies();
  useTvShows();

  return (
    <div className="bg-gradient-to-b from-black">
      <BaseHeader
        midElement={
          <div className="my-2 flex justify-between animate-scaleUp">
            <ul className="flex ">
              <li className="p-2 m-2 text-white text-2xl cursor-pointer" onClick={()=>{navigate("/")}}>
                {lang[langs].home}
              </li>
              <li className="p-2 m-2 text-white text-2xl cursor-pointer" onClick={()=>{navigate("/movies")}} >
                {lang[langs].movies}
              </li>
              <li className="p-2 m-2 text-white text-2xl cursor-pointer" onClick={()=>{navigate("/tvshows")}}>
                {lang[langs].TV_Shows}
              </li>
              {/* <li className="p-2 m-2 text-white text-2xl cursor-pointer">
                <input
                  type="text"
                  placeholder={lang[langs].searchPlaceHolder}
                  className="w-[290px] rounded-lg text-lg p-2 text-black"
                />
              </li> */}
              {/* <l1 className="p-1 m-1 mt-3 text-white text-2xl ">
                <button
                  className="text-[18px]  px-[18px] py-[5px] rounded-lg bg-red-600 hover:bg-red-400 hover:text-[22px]"
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                >
                  {lang[langs].search}
                </button>
              </l1> */}
              {/* <l1>
                <button
                  className="text-[18px] mt-5 text-white px-[18px] py-[5px] rounded-lg bg-purple-700 hover:bg-purple-500 hover:text-[16px]"
                  onClick={()=>{navigate("/gptsearch")}}
                >
                  GptSearch
                </button>
              </l1> */}
            </ul>

            <div className="ml-[500px] flex">
            <div>
            <button
                  className="text-[18px] mt-5 text-white px-[18px] py-[5px] rounded-lg bg-purple-700 hover:bg-purple-500 hover:text-[16px]"
                  onClick={()=>{navigate("/gptsearch")}}
                >
                  GptSearch
                </button>
            </div>
              <div className="my-1  p-3 rounded-lg ">
                <select
                  className="px-4 mr-5 mt-2 py-1 rounded-lg border-white"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="m-auto flex">
                {/* <p>{displayName}</p> ..displaying the name of the user here */}
                <img
                  className="w-[45px] h-[45px] mt-1"
                  alt="login-logo"
                  src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                />
                <div>
                  <button
                    className="bg-red-600 text-white font-bold  py-3 px-4  text-[16px] rounded-lg hover:bg-red-400 hover:text-[15px] my-1 mx-3 "
                    onClick={handleSignOut}
                  >
                    {lang[langs].signout}{" "}
                    {/* will create a toggle feature for the button*/}
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      ></BaseHeader>

      {/* Browse */}
      {/*
        MainContainer
          - Video Container
          - Video Title
        Secondary Container
          -Movie List * n
          -cards * n
       */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
