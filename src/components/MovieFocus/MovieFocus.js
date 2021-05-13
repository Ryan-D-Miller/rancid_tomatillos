import React from 'react';
import './MovieFocus.css';
// import './MovieCard.css'

export default function MovieFocus({movie, focusClose}) {
  return (
    <div id={movie.id} className="focus">
      <button onClick={focusClose} className='focus-close'>❌</button>
      <img className="backdrop" src={movie.backdrop_path} />
      <header className="focus_header">{movie.title}</header>
      <footer className="focus_footer">
        <p className="footer_text">{movie.average_rating.toFixed(1)}</p>
        <p className="footer_text">{movie.release_date}</p>
      </footer>
    </div>
  )
}
