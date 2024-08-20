import css from "./MovieReviews.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../movie-api";

function MovieReviews() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    if (!movieId) return;
    async function loadMovieReviews(id) {
      const reviews = await fetchMovieReviews(id);
      setReviews(reviews.results);
    }
    loadMovieReviews(movieId);
  }, []);
  return (
    <ul>
      {reviews.map((review) => (
        <li className={css.review} key={review.id}>
          <h4>{review.author}</h4>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
