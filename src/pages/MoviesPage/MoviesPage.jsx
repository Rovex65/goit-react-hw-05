import { fetchSearchMovie } from "../../movie-api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  useEffect(() => {
    const getMovies = async () => {
      if (!query) return;
      try {
        const res = await fetchSearchMovie(query);
        setMovies(res.results);
      } catch (error) {
        alert(error);
      }
    };
    getMovies();
  }, [query]);
  async function searchMovies(evt) {
    evt.preventDefault();
    const form = evt.target;
    const query = form.query.value.trim();
    form.reset();
    if (!query) {
      alert("Please write query");
      return;
    }
    setSearchParams({ query });
  }
  return (
    <section>
      <form onSubmit={searchMovies}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      {movies.length ? <MovieList movies={movies} /> : <p>No Movies</p>}
    </section>
  );
}

export default MoviesPage;
