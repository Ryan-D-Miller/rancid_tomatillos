import React from 'react';
import './MovieCard.css';

export default function MovieCard ({movie}) {
    return (
        <div id={movie.id} className="card" style={{backgroundImage: `url(${movie.poster_path})`}}>
            <header className="card_Header">{movie.title}</header>
            <footer className="card_Footer">
                <p className="footer_Text">{movie.average_rating}</p>
                <p className="footer_Text">{movie.release_date}</p>
            </footer>
        </div>
    ) 
}