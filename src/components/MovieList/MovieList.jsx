import { Link, useLocation } from "react-router-dom";

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link state={location} to={`/movies/${movie.id}`}>
            <p>{movie.title || movie.original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
