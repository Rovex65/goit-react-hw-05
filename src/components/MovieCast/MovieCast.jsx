import css from "./MovieCast.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../movie-api";

function MovieCast() {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    async function loadMovieCast(id) {
      const cast = await fetchMovieCast(id);
      setCast(cast.cast);
    }
    loadMovieCast(movieId);
  }, []);
  return (
    <ul>
      {cast.map((actor) => (
        <li className={css.actor} key={actor.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
            alt=""
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
