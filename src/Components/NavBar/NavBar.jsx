import React from "react";
import style from "./NavBar.module.less";
import movie from "../../assets/movie-svgrepo-com.svg";
import home from "../../assets/home-icon.svg";
import search from "../../assets/search-icon.svg";
import { useNavigate, useLocation } from "react-router-dom";
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
  const { searchValue } = useSelector((state) => {
    return state.moviesData;
  });
  const navigateTo = () => {
    navigate("/");
  };
  const location = useLocation();

  const dispatch = useDispatch();

  const getByMovieName = async (e) => {
    const searchValueData = e.target.value;
    dispatch(setSearchValue(searchValueData));

    if (!searchValueData) {
      dispatch(setIsSearching(false));
      await getMovies();
      return;
    }
    dispatch(setIsSearching(true));

    try {
      const response = await getMovieByMovieName(searchValueData, 1);
      const data = {
        isSearch: true,
        data: response.data.results,
        isEmpty: false,
      };
      dispatch(setMoviesData(data));
    } catch (err) {
      console.error(err);
    }
  };

  const getMovies = async () => {
    await getMoviesDetails(1)
      .then((res) => {
        const data = {
          isSearch: false,
          data: res.data.results,
          isEmpty: true,
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
      {location.pathname === "/" && (
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
      )}
      <div className={style["actionsContainer"]}>
        <img src={home} alt="" onClick={navigateTo} />
      </div>
    </nav>
  );
};

export default NavBar;
