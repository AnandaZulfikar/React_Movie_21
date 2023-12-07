// MovieCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, handleGenreFilter }) => {
  const { id, title, poster_path } = movie;

  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <div className="movie-info">
          <h3>{title}</h3>
          {/* Tambahkan elemen lainnya seperti genre, rating, dll. */}
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
