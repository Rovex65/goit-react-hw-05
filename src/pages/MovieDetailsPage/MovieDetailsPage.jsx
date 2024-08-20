import css from "./MovieDetailsPage.module.css";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../movie-api";
import { useRef, useEffect, useState } from "react";

function MovieDetailsPage() {
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    async function loadMovieDetails(id) {
      const movie = await fetchMovieDetails(id);
      setMovie(movie);
    }
    loadMovieDetails(movieId);
  }, [movieId]);
  return (
    <section>
      <Link to={backLinkHref.current}>
        <button type="button">Go Back</button>
      </Link>
      {movie && (
        <div>
          <div className={css.wrapper}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className={css.textWrapper}>
              <h2>{movie.title}</h2>
              <p>Release year: {new Date(movie.release_date).getFullYear()}</p>
              <p>User score: {Math.round(movie.vote_average * 10)}% </p>
              <h3>Overveiw</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres &&
                  movie.genres.map((genre) => {
                    return <li key={genre.id}>{genre.name}</li>;
                  })}
              </ul>
            </div>
          </div>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </section>
  );
}

export default MovieDetailsPage;
