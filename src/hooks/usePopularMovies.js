import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/MoviesSlice";

const usePopularMovies = () => {
  //fetch data from TMDB API and updated the store (MoviesSlice)
  const PopularMovies=useSelector(store=>store.movies.PopularMovies);
  const dispatch = useDispatch();
  useEffect(() => {
    !PopularMovies && getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json =await data.json();
    // console.log(json);
    dispatch(addPopularMovies(json));
  };
};

export default usePopularMovies;
