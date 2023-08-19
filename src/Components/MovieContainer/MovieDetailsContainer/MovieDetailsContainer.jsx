import React from "react";
import style from "./MovieDetailsContainer.module.less";
import avenger from "../../../assets/avengers.jpg";

const MovieDetailsContainer = () => {
  return (
    <div className={style["details-container"]}>
      <div className={style["imageContainer"]}>
        <img src={avenger} alt="" />
      </div>
      <div className={style["details"]}>
        <div className={style["title-rating"]}>
          <span className={style["title"]}>Avengers End Game</span>
          <span className={style["rating"]}>4.9</span>
        </div>
        <div className={style["info"]}>
          <span className={style["year"]}>2021</span> |&nbsp;
          <span className={style["length"]}>3 hr 10 min</span> |&nbsp;
          <span className={style["director"]}>Ruso Brothers</span> |&nbsp;
        </div>
        <div className={style["cast"]}>
          <ul>
            <li>Cast 1,</li>
            <li>Cast 2,</li>
            <li>Cast 3,</li>
            <li>Cast 4,</li>
            <li>Cast 5,</li>
          </ul>
        </div>
        <div className={style["description"]}>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure iusto
            doloremque atque repellat inventore harum velit, corrupti illo
            recusandae commodi dolor eaque quas adipisci corporis numquam
            similique, officia delectus dolorem. Ea aut dolorem sed eligendi,
            soluta in nisi eos voluptates, placeat voluptatibus praesentium eum
            error. Illo voluptatum, a omnis doloremque quas, corporis, debitis
            deserunt ducimus incidunt sunt eaque sit nostrum?
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsContainer;
