import { Outlet, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../movie-api";
import { useEffect, useState } from "react";

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    async function loadMovieDetails(id) {
      const movie = await fetchMovieDetails(id);
      console.log(movie);
      setMovie(movie);
    }
    loadMovieDetails(movieId);
  }, []);
  return (
    <section>
      {movie && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
          />
          <h2>{movie.title}</h2>
          <p>{Number(movie.vote_average).toFixed(1)}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <Outlet />
        </div>
      )}
    </section>
  );
}

export default MovieDetailsPage;
