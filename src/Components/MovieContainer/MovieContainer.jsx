import React, { useEffect } from "react";
import style from "./MovieContainer.module.less";
import MovieBoxContainer from "./MovieBoxContainer/MovieBoxContainer";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesDetails } from "../../services/movieService";
import {
  setLoading,
  setMoviesData,
  setPage,
} from "../../store/slice/movieSlice";

const MovieContainer = () => {
  const dispatch = useDispatch();

  const { movies, page, loading } = useSelector((state) => {
    console.log("state.moviesData.page", state.moviesData.page);
    return state.moviesData;
  });

  useEffect(() => {
    getMovies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = (currentPage) => {
    dispatch(setLoading(true));
    getMoviesDetails(currentPage)
      .then((res) => {
        dispatch(setMoviesData(res.data.results));
        dispatch(setPage(currentPage + 1));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100 &&
        !loading
      ) {
        getMovies(page);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style["movieContainer"]}>
      <div className={style["list-box-container"]}>
        {movies &&
          movies.map((movie, index) => (
            <MovieBoxContainer {...movie} key={index} />
          ))}
      </div>
      {loading && "Loading...."}
    </div>
  );
};

export default MovieContainer;
