import React, { useEffect, useState } from "react";
import style from "./MovieDetailsContainer.module.less";
import { useParams } from "react-router-dom";
import {
  getCastByMovieId,
  getMovieDetailsById,
} from "../../../services/movieService";
import {
  convertMinutesToHHMM,
  extractYearFromDate,
  formatToTwoDecimalPlaces,
} from "../../../utilities/commonFunction";

const MovieDetailsContainer = () => {
  const [movie, setMovie] = useState(null);
  const [castData, setCast] = useState([]);
  const [crewData, setCrew] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getMovieById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieById = (id) => {
    getMovieDetailsById(id).then((res) => {
      setMovie(res.data);
    });
    getCastByMovieId(id).then((res) => {
      setCast(res.data.cast);
      setCrew(res.data.crew);
    });
  };

  return (
    <>
      {movie && (
        <div className={style["details-container"]}>
          <div className={style["imageContainer"]}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${
                movie && movie.poster_path
              }`}
              alt=""
            />
          </div>
          <div className={style["details"]}>
            <div className={style["title-rating"]}>
              <span className={style["title"]}>{movie && movie.title}</span>
              <span className={style["rating"]}>
                ({formatToTwoDecimalPlaces(movie && movie.vote_average)}/10)
              </span>
            </div>
            <div className={style["info"]}>
              <span className={style["year"]}>
                {extractYearFromDate(movie.release_date)}
              </span>{" "}
              |&nbsp;
              <span className={style["length"]}>
                {convertMinutesToHHMM(movie.runtime)}
              </span>{" "}
              |&nbsp;
              <span className={style["director"]}>{movie.status}</span> |&nbsp;
            </div>
            <div className={style["cast"]}>
              <span>Casts:</span>
              <ul>
                {castData &&
                  castData.slice(0, 3).map((cast) => (
                    <li key={cast.id}>
                      {cast.name}&nbsp;
                      {castData.indexOf(cast) !== castData.length - 1 && " | "}
                      &nbsp;
                    </li>
                  ))}
              </ul>
            </div>
            <div className={style["cast"]}>
              <span>Crews:</span>
              <ul>
                {crewData &&
                  crewData.slice(0, 3).map((crew) => (
                    <li key={crew.id}>
                      {crew.name}&nbsp;
                      {crewData.indexOf(crew) !== crewData.length - 1 && " | "}
                      &nbsp;
                    </li>
                  ))}
              </ul>
            </div>
            <div className={style["description"]}>
              <span>{movie && movie.overview}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetailsContainer;
