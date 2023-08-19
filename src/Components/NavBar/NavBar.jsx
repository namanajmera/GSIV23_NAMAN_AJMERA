import React from "react";
import style from "./NavBar.module.less";
import movie from "../../assets/movie-svgrepo-com.svg";
import home from "../../assets/home-icon.svg";
import search from "../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";
import {
  getMovieByMovieName,
  getMoviesDetails,
} from "../../services/movieService";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsSearching,
  setLoading,
  setMoviesData,
  setPage,
  setSearchValue,
} from "../../store/slice/movieSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const { searchValue, isSearching } = useSelector((state) => {
    return state.moviesData;
  });
  const navigateTo = () => {
    navigate("/");
  };

  const dispatch = useDispatch();

  const getByMovieName = (e) => {
    dispatch(setSearchValue(e.target.value));
    if (!e.target.value) {
      dispatch(setIsSearching(false));
      getMovies();
      return;
    }
    dispatch(setIsSearching(true));
    getMovieByMovieName(e.target.value, 1)
      .then((res) => {
        const data = {
          isSearch: isSearching,
          data: res.data.results,
        };
        dispatch(setMoviesData(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMovies = async () => {
    await getMoviesDetails(1)
      .then((res) => {
        const data = {
          isSearch: false,
          data: res.data.results,
        };
        dispatch(setMoviesData(data));
        dispatch(setPage(2));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
    dispatch(setPage(1));
  };
  return (
    <nav className={style["nav-bar-container"]}>
      <div className={style["logoContainer"]}>
        <div className={style["logo"]}>
          <img src={movie} alt="" />
        </div>
        <div className={style["verticalLine"]}></div>
        <div className={style["name"]}>
          <span>Movies</span>
        </div>
      </div>
      <div className={style["searchContainer"]}>
        <img src={search} alt="" className={style["searchIcon"]} />
        <input
          type="text"
          name="movies"
          id="movies"
          placeholder="Search Movies...."
          value={searchValue}
          onChange={(e) => getByMovieName(e)}
        />
      </div>
      <div className={style["actionsContainer"]}>
        <img src={home} alt="" onClick={navigateTo} />
      </div>
    </nav>
  );
};

export default NavBar;
