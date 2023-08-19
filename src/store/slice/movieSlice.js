import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: [],
    page: 1,
    loading: false,
  },
  reducers: {
    setMoviesData(state, action) {
      state.movies = [...state.movies, ...action.payload];
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setMoviesData, setLoading, setPage } = movieSlice.actions;
