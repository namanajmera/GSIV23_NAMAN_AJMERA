import React from "react";
import style from "./NavBar.module.less";
import movie from "../../assets/movie-svgrepo-com.svg";
import home from "../../assets/home-icon.svg";
import search from "../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const navigateTo = () => {
    navigate("/");
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
        />
      </div>
      <div className={style["actionsContainer"]}>
        <img src={home} alt="" onClick={navigateTo} />
      </div>
    </nav>
  );
};

export default NavBar;
