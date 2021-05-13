import React from 'react';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import './Dashboard.css';

export default function Dashboard({movies}) {
    return (
        <main className="dashboard">
            <MovieCarousel movies={movies}/>
        </main>
    )
}