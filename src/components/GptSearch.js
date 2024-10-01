import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import BaseHeader from "./BaseHeader";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const GptSearch = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img
        className="absolute top-0 left-0 -z-10 bg-fixed h-screen w-screen blur-[2px]"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
        alt="background-img"
      />
      <div className="flex justify-between">
        <div className="px-8 py-3 flex  ">
          <img className="w-44" src={LOGO} alt="Netflix-logo" />
        </div>
        <div className="mr-20">
          <button
            className="text-[18px] mt-5 text-white px-[18px] py-[5px] rounded-lg bg-purple-700 hover:bg-purple-500 hover:text-[16px]"
            onClick={() => {
              navigate("/browse");
            }}
          >
            HomePage
          </button>
        </div>
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
