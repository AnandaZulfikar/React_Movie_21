// MovieList.js
import React from 'react';
import MovieCard from './MovieCard.js';

const MovieList = ({ movies, handleGenreFilter }) => {
  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} handleGenreFilter={handleGenreFilter} />
      ))}
    </div>
  );
};

export default MovieList;
