import React, { useState } from "react";
import style from "./MovieContainer.module.less";
import MovieBoxContainer from "./MovieBoxContainer/MovieBoxContainer";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  // const [movies, setMovies] = useState()

  const { movies } = useSelector((state) => {
    return state.moviesData;
  });
  return (
    <div className={style["movieContainer"]}>
      <div className={style["list-box-container"]}>
        {movies &&
          movies.map((movie, index) => (
            <MovieBoxContainer {...movie} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MovieContainer;
