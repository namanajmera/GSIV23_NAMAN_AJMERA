import axios from "axios";
import { BASE_URL } from "../utilities/commonFunction";

const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmJmNGRhYjRiMTE5MjUyYTRlZjlmNWIwNjkwZjEyOSIsInN1YiI6IjY0ZGYzYzEyZDEwMGI2MTRiMzAwY2IxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fc3Q71tOlZ_95aIrE0KoPWWj4EoR_EF_LzI6sKiIl3o",
};
const getMoviesDetails = (page) => {
  const apiURL = `${BASE_URL}movie/upcoming?language=en-US&page=${page}`;

  return axios.get(apiURL, { headers });
};

const getMovieDetailsById = (id) => {
  const apiURL = `${BASE_URL}/movie/${id}?language=en-US`;

  return axios.get(apiURL, { headers });
};

const getMovieByMovieName = (movie, page) => {
  const apiURL = `${BASE_URL}search/movie?query=${movie}&include_adult=false&language=en-US&page=${page}`;

  return axios.get(apiURL, { headers });
};

const getCastByMovieId = (movieId) => {
  const apiURL = `${BASE_URL}movie/${movieId}/credits?language=en-US`;

  return axios.get(apiURL, { headers });
};

export {
  getMoviesDetails,
  getMovieDetailsById,
  getMovieByMovieName,
  getCastByMovieId,
};
