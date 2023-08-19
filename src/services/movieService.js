import axios from "axios";
import { BASE_URL } from "../utilities/commonFunction";

const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmJmNGRhYjRiMTE5MjUyYTRlZjlmNWIwNjkwZjEyOSIsInN1YiI6IjY0ZGYzYzEyZDEwMGI2MTRiMzAwY2IxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fc3Q71tOlZ_95aIrE0KoPWWj4EoR_EF_LzI6sKiIl3o",
};
const getMoviesDetails = () => {
  const apiURL = `${BASE_URL}movie/now_playing?language=en-US&page=1`;

  return axios.get(apiURL, { headers });
};

const getMovieDetailsById = (id) => {
  const apiURL = `${BASE_URL}/movie/${id}?language=en-US`;

  return axios.get(apiURL, { headers });
};

export { getMoviesDetails, getMovieDetailsById };
