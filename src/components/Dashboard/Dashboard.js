import React from 'react';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import './Dashboard.css';

export default function Dashboard({movies}) {
    return (
        <main className="dashboard">
            <h1 classname="movie_titles">Movies!</h1>
            <MovieCarousel movies={movies}/>
        </main>
    )
}