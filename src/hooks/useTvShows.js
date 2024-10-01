import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector} from "react-redux";
import { addTvShows } from "../utils/MoviesSlice";

const useTvShows = () => {
    const dispatch=useDispatch();
    const TvShows=useSelector(store=>store.movies.TvShows);
  useEffect(() => {
    !TvShows && getTvshows();
  }, []);

  const getTvshows = async () => {
    const shows = await fetch(
      "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
      API_OPTIONS
    );
    const json=await shows.json();
    console.log(json);
    dispatch(addTvShows(json));


  };
};

export default useTvShows;
