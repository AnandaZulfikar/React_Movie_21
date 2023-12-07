// MovieDetail.js
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Rating from 'react-rating-stars-component';
import './MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);

  const handleRatingChange = newRating => {
    // Logika untuk menyimpan rating (bisa menggunakan state atau API)
    setRating(newRating);
  };

  // Mock data informasi film (gantilah dengan logika pengambilan data sesungguhnya)
  const movieDetails = {
    id: id,
    title: 'Judul Film',
    overview: 'Ini adalah ringkasan film.',
    release_date: '2023-01-01',
    poster_path: '/path/to/poster.jpg',
    genres: ['Action', 'Adventure'],
  };

  return (
    <div className="movie-detail-container">
      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>Tanggal Rilis: {movieDetails.release_date}</p>
      <p>Genre: {movieDetails.genres.join(', ')}</p>
      <p>Ringkasan: {movieDetails.overview}</p>
      <p>Rating: {rating}</p>

      {/* Tambahkan komponen Rating untuk memberikan rating */}
      <Rating
        count={5}
        onChange={handleRatingChange}
        size={24}
        value={rating}
        color="#ffd700"
        activeColor="#ffd700"
      />

      {/* Tambahkan tombol kembali */}
      <Link to="/">Kembali ke Beranda</Link>
    </div>
  );
};

export default MovieDetail;
