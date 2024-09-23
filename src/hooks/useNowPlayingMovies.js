import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MoviesSlice";

const useNowPlayingMovies = () => {
  //fetch data from TMDB API and updated the store (MoviesSlice)
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json =await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json));
  };
};

export default useNowPlayingMovies;
