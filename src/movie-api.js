import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMmViMzhjYTMzM2I1YjkyNmRmMjRmYWI4NTQyMDhmYSIsInN1YiI6IjY2Mjg1OWNjYTM5ZDBiMDE4OTQ3YTliYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5SlyCpNul0Xh5DfmbMZEaVDAih2mcpbkbdOLIie8PZQ",
  },
};

export async function fetchTrendingMovies() {
  const res = await axios.get("/trending/movie/week?language=en-US", options);
  console.log(res);
}

export async function fetchSearchMovie(query, page = 1) {
  const res = await axios.get(
    `/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    options
  );
  console.log(res);
}

export async function fetchMovieDetails(id) {
  const res = await axios.get(`/movie/${id}?language=en-US`, options);
  console.log(res);
}

export async function fetchMovieCast(id) {
  const res = await axios.get(`/movie/${id}/credits?language=en-US`, options);
  console.log(res);
}

export async function fetchMovieReviews(id) {
  const res = await axios.get(`/movie/${id}/reviews?language=en-US`, options);
  console.log(res);
}

fetchTrendingMovies();
fetchSearchMovie("interstellar");
fetchMovieDetails(157336);
fetchMovieCast(157336);
fetchMovieReviews(157336);
