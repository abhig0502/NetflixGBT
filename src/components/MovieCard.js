import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath }) => {
  console.log({ posterPath });
  const navigate = useNavigate();
  const handleOnClickImage = () => {
    navigate("/moviepage");
  };
  return (
    <div className="w-[200px] h-60 m-2  rounded-xl">
      <img
        className="w-[200px] h-60 rounded-xl cursor-pointer border-2 border-white hover:-mt-11 hover:shadow-2xl hover:shadow-white "
        onClick={handleOnClickImage}
        alt="poster"
        src={"https://image.tmdb.org/t/p/w500" + posterPath}
        // src="https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg"
      />
    </div>
  );
};

export default MovieCard;
