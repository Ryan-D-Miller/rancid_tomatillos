import React from 'react';
import './MovieFocus.css';

export default function MovieFocus({ movie, focusClose }) {
  return (
    <div id={movie.id} className="focus">
      <header className="focus-header">
      <button onClick={focusClose}>x</button>
        <div className="header_title">
            <h1>{movie.title}</h1>
            <p className="top_line">{movie.tagline}</p>
            <p>Release Date: {movie.release_date}</p>
        </div>
      </header>
      <img src={movie.backdrop_path} alt={movie.title}/>
      <section className="overview">
        <p>Overview:</p>
        <div>
          {movie.overview}
        </div>
      </section>
      <footer >
        <section className="focus-footer top_line">
          <p className="footer-text">Rating: {movie.average_rating.toFixed(1)}</p>
          <p className="footer-text">Revenue: ${movie.revenue.toLocaleString('en-US')}</p>
          <p className="footer-text">Budget: ${movie.budget.toLocaleString('en-US')}</p>
          <p className="footer-text">Run Time: {movie.runtime} minutes</p>
        </section>
        <section className="focus-footer top_line">
          <p>Genres</p>
        </section>
        <section className="focus-footer">
          {movie.genres.map(genre => {
            return <p>{genre}</p>
          })}
        </section>
      </footer>
    </div>
  )
}
