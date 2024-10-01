import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
  name: "movies",
  initialState: {
    NowPlayingMovies: null,
    PopularMovies: null,
    TvShows: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.NowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTvShows: (state, action) => {
      state.TvShows = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPopularMovies, addTvShows } =
  MoviesSlice.actions;
export default MoviesSlice.reducer;
