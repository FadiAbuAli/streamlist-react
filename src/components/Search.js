import React, { useState, useEffect } from 'react';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(() => {
    try {
      const saved = localStorage.getItem('tmdbResults');
      const parsed = saved && saved !== 'undefined' ? JSON.parse(saved) : [];
      return parsed;
    } catch (e) {
      console.error('Failed to parse saved movies:', e);
      return [];
    }
  });

  const [streamList, setStreamList] = useState(() => {
    try {
      const saved = localStorage.getItem('streamList');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load streamList:', e);
      return [];
    }
  });

  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setMovies(data.results);
      localStorage.setItem('tmdbResults', JSON.stringify(data.results));
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleClear = () => {
    setQuery('');
    setMovies([]);
    localStorage.removeItem('tmdbResults');
  };

  const handleAddToStreamList = (movie) => {
    const alreadyExists = streamList.some(item => item.id === movie.id);
    if (!alreadyExists) {
      const updated = [...streamList, movie];
      setStreamList(updated);
      localStorage.setItem('streamList', JSON.stringify(updated));
      alert(`${movie.title} added to StreamList!`);
    }
  };

  const isInStreamList = (id) => streamList.some(movie => movie.id === id);

  return (
    <div className="search-container">
      <h2>Search for Movies</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter movie title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
        <button type="button" onClick={handleClear} style={{ marginLeft: '1rem' }}>
          Clear
        </button>
      </form>

      <div className="results">
        {movies.map((movie) => {
          const alreadyAdded = isInStreamList(movie.id);
          return (
            <div key={movie.id} className="movie-card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.overview || 'No description available.'}</p>
                <button
                  className={`add-btn ${alreadyAdded ? 'disabled' : ''}`}
                  onClick={() => handleAddToStreamList(movie)}
                  disabled={alreadyAdded}
                >
                  {alreadyAdded ? 'Already Added' : 'Add to StreamList'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
