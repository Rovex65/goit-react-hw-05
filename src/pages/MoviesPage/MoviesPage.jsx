import { fetchSearchMovie } from "../../movie-api";
import MovieList from "../../components/MovieList/MovieList";
import { useState } from "react";

function MoviesPage() {
  const [movies, setMovies] = useState();
  async function searchMovies(evt) {
    evt.preventDefault();
    const form = evt.target;
    const query = form.query.value.trim();
    try {
      if (!query) {
        alert("Please write query");
        return;
      }
      const res = await fetchSearchMovie(query);
      setMovies(res.results);
      console.log(movies);
    } catch (error) {
      alert(error);
    } finally {
      form.reset();
    }
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
