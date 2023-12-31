// MovieItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieItem = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />
        <h3>{movie.title}</h3>
        <FontAwesomeIcon icon={faStar} color="#ffd700" /> {movie.rating}
      </Link>
    </div>
  );
};

export default MovieItem;
