import React from 'react';
import './MovieCard.css';


export default function MovieCard ({movie}) {
    return (
        <div id={movie.id} className="card" style={{backgroundImage: `url(${movie.poster_path})`}}>
            <header className="card_header">{movie.title}</header>
            <footer className="card_footer">
                <p className="footer_text">{movie.average_rating.toFixed(1)}</p>
                <p className="footer_text">{movie.release_date}</p>
            </footer>
        </div>
    ) 
}