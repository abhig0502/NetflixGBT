import React from "react";
import { useNavigate } from "react-router-dom";
import MoviePage from "./MoviePage";
import { Link } from "react-router-dom";

const MovieCard = ({movies,posterPath}) => {
  // const { posterPath } = movies;
  // console.log(movies);

  const navigate = useNavigate();
  const handleOnClickImage = () => {
    navigate("/moviepage/"+movies.id);
    // console.log(movies);
  };

  return (
    <div className="w-[200px] h-60 m-2 rounded-xl">
      <img
        className="w-[200px] h-60 rounded-xl cursor-pointer border-2 border-white hover:-mt-[10px] hover:shadow-2xl hover:shadow-white "
        onClick={handleOnClickImage}
        alt="poster"
        src={"https://image.tmdb.org/t/p/w500" + posterPath}
        // src="https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg"
      />
    </div>
  );
};

export default MovieCard;
