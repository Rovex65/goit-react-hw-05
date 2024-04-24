import MovieList from "../../components/MovieList/MovieList";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../movie-api";

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetchTrendingMovies();
        setMovies(res.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <section>
      <h2>Trends of the Week</h2>
      <MovieList movies={movies} />
    </section>
  );
}

export default HomePage;
