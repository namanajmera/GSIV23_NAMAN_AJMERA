import React, { useEffect, useState } from "react";
import style from "./MovieDetailsContainer.module.less";
import { useParams } from "react-router-dom";
import { getMovieDetailsById } from "../../../services/movieService";
import {
  convertMinutesToHHMM,
  extractYearFromDate,
  formatToTwoDecimalPlaces,
} from "../../../utilities/commonFunction";

const MovieDetailsContainer = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getMovieById(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovieById = (id) => {
    getMovieDetailsById(id).then((res) => {
      setMovie(res.data);
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
              <span>Genres:</span>
              <ul>
                {movie &&
                  movie.genres &&
                  movie.genres.map((genre) => (
                    <li key={genre.id}>{genre.name}&nbsp;|&nbsp;</li>
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
