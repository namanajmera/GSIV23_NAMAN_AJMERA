import React from "react";
import style from "./MovieBoxContainer.module.less";

const MovieBoxContainer = ({ id, img, title, rating, description }) => {
  return (
    <div className={style["boxContainer"]}>
      <div className={style["imageContainer"]}>
        <img src={img} alt="" className={style["image"]} />
      </div>
      <div className={style["movieDetails"]}>
        <div className={style["title-rating"]}>
          <span className={style["title"]}>{title}</span>
          <span className={style["rating"]}>{rating}</span>
        </div>
        <div className={style["desc"]}>
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieBoxContainer;
