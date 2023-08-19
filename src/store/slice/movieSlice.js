import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: [],
  },
  reducers: {
    setMoviesData(state, action) {
      state.movies = action.payload;
    },
  },
});

export const { setMoviesData } = movieSlice.actions;
