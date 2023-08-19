import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movieSlice",
  initialState: {
    movies: [],
    page: 1,
    loading: false,
    isSearching: false,
    searchValue: "",
  },
  reducers: {
    setMoviesData(state, action) {
      if (action.payload.isSearch || action.payload.isEmpty) {
        state.movies = action.payload.data;
      } else {
        state.movies = [...state.movies, ...action.payload.data];
      }
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setIsSearching(state, action) {
      state.isSearching = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setMoviesData,
  setLoading,
  setPage,
  setIsSearching,
  setSearchValue,
} = movieSlice.actions;
