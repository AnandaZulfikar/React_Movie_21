// App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: '9a07af15570e929494f864d903001ca1',
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = () => {
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setSelectedGenre(''); // Reset genre saat melakukan pencarian
  };

  const resetSearch = () => {
    setSearchResults([]);
    setSearchTerm('');
    setSelectedGenre('');
  };

  const handleGenreFilter = (genre) => {
    const filteredMovies = movies.filter((movie) =>
      movie.genre_ids.includes(Number(genre))
    );
    setSearchResults(filteredMovies);
    setSelectedGenre(genre);
  };

  return (
    <Router>
      <div className="router-container">
        <h1>Movie 21</h1>
        <input
          type="text"
          placeholder="Cari film..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Cari</button>
        <button onClick={resetSearch}>Reset</button>

        <br/>
        <select
          value={selectedGenre}
          onChange={(e) => {
            handleGenreFilter(e.target.value);
          }}
        >
          <option value="">Pilih Genre</option>
          <option value="28">Action</option>
          <option value="35">Comedy</option>
          <option value="18">Drama</option>
          <option value="14">Fantasy</option>
          <option value="27">Horror</option>
          <option value="10749">Romance</option>
        </select>

        <Routes>
          <Route
            path="/"
            element={<MovieList movies={searchResults.length > 0 ? searchResults : movies} handleGenreFilter={handleGenreFilter} />}
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
