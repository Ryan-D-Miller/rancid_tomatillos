import React from 'react';
import './MovieFocus.css';
// import './MovieCard.css'

export default function MovieFocus({ movie, focusClose }) {
  return (
    <div id={movie.id} className="focus">
      <header className="focus-header">
      <button onClick={focusClose} className='focus-close'>❌</button>
        <h1>{movie.title}</h1>
      </header>
      <img src={movie.backdrop_path} alt={movie.title}/>
      <footer className="focus-footer">
        <p className="footer-text">Rating: {movie.average_rating.toFixed(1)}</p>
        <p className="footer-text">Release Date: {movie.release_date}</p>
      </footer>
    </div>
  )
}
