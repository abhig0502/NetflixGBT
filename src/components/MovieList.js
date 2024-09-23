import MovieCard from "./MovieCard";
import _ from 'lodash';

const MovieList = ({ title, movies }) => {
    
  if (!movies) return;
  console.log(movies);

  const shuffledMovies = _.shuffle(movies);
  return (
    <div className="-mt-52 mb-52 relative z-20 bg-transparent" >
        <div className="">
        <h1 className="text-bold text-white text-3xl ml-3 p-2 mb-2">{title}</h1>
        </div>
      <div className="flex overflow-x-scroll scrollbar-hide">

        <div className="flex">
          {shuffledMovies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
{
  /* Object.keys(movies[0]).map */
}
