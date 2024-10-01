import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MoviesSlice";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  //fetch data from TMDB API and updated the store (MoviesSlice)
  const NowPlayingMovies=useSelector(store=>store.movies.NowPlayingMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    !NowPlayingMovies && getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json =await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovies(json));
    // console.log(json);
  };
};

export default useNowPlayingMovies;
