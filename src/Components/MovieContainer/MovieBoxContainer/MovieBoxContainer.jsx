import React from "react";
import style from "./MovieBoxContainer.module.less";
import { useNavigate } from "react-router-dom";
import { formatToTwoDecimalPlaces } from "../../../utilities/commonFunction";

const MovieBoxContainer = ({
  id,
  poster_path,
  title,
  vote_average,
  overview,
}) => {
  const navigate = useNavigate();

  const getDetails = () => {
    navigate(`/movie/${id}`);
  };
  return (
    <div className={style["boxContainer"]} onClick={getDetails}>
      <div className={style["imageContainer"]}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className={style["image"]}
        />
      </div>
      <div className={style["movieDetails"]}>
        <div className={style["title-rating"]}>
          <span className={style["title"]}>
            <strong>{title}</strong>
          </span>
          <span className={style["rating"]}>
            {formatToTwoDecimalPlaces(vote_average)}/10
          </span>
        </div>
        <div className={style["desc"]}>
          <span>{overview}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieBoxContainer;
