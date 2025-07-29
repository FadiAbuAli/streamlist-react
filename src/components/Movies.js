import React from 'react';
import Search from './Search';
import './Movies.css';

const Movies = () => {
  return (
    <div className="movies-page">
      <Search /> {/* This brings back the TMDB search */}
      <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Recommended Movies</h2>
      <div className="movie-list">
        <div className="movie-card">
          <img src="https://image.tmdb.org/t/p/w200/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" alt="Inception" />
          <h3>Inception</h3>
          <p>A thief who steals corporate secrets through dream-sharing technology.</p>
        </div>
        <div className="movie-card">
          <img src="https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="The Matrix" />
          <h3>The Matrix</h3>
          <p>A computer hacker learns the truth about his reality and his role in the war.</p>
        </div>
        <div className="movie-card">
          <img src="https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" alt="Interstellar" />
          <h3>Interstellar</h3>
          <p>A team travels through a wormhole in space to ensure humanity’s survival.</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
