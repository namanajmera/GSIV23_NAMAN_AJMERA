import React, { useEffect } from "react";
import style from "./MovieContainer.module.less";
import MovieBoxContainer from "./MovieBoxContainer/MovieBoxContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieByMovieName,
  getMoviesDetails,
} from "../../services/movieService";
import {
  setIsSearching,
  setLoading,
  setMoviesData,
  setPage,
} from "../../store/slice/movieSlice";

const MovieContainer = () => {
  const dispatch = useDispatch();

  const { movies, page, loading, isSearching, searchValue } = useSelector(
    (state) => {
      return state.moviesData;
    }
  );

  useEffect(() => {
    dispatch(setIsSearching(false));
    getMovies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = (currentPage) => {
    dispatch(setLoading(true));
    getMoviesDetails(currentPage)
      .then((res) => {
        const data = {
          isSearch: false,
          data: res.data.results,
          isEmpty: false,
        };
        dispatch(setMoviesData(data));
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
        if (!isSearching) {
          getMovies(page);
        } else {
          setTimeout(() => {
            getMovieScrollSearch(searchValue, page);
          }, 2000);
        }
      }
    };

    const getMovieScrollSearch = (searchValueData, currentPage) => {
      getMovieByMovieName(searchValueData, currentPage)
        .then((res) => {
          const data = {
            isSearch: isSearching,
            data: res.data.results,
            isEmpty: false,
          };
          dispatch(setMoviesData(data));
          dispatch(setPage(currentPage + 1));
        })
        .catch((err) => {
          console.log(err);
        });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, isSearching]);

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
