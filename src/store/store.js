import { movieSlice } from "./slice/movieSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    moviesData: movieSlice.reducer,
  },
});

export { store };
