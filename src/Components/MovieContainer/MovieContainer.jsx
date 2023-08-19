import React, { useEffect, useState } from "react";
import style from "./MovieContainer.module.less";
import MovieBoxContainer from "./MovieBoxContainer/MovieBoxContainer";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesDetails } from "../../services/movieService";
import { setMoviesData } from "../../store/slice/movieSlice";

const MovieContainer = () => {
  // const [movies, setMovies] = useState()
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = () => {
    getMoviesDetails()
      .then((res) => {
        console.log(res);
        dispatch(setMoviesData(res.data.results));
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
