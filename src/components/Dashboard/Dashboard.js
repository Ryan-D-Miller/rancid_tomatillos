import React from 'react';
import MovieCarousel from '../MovieCarousel/MovieCarousel'

export default function Dashboard({movies}) {
    return (
        <main>
            <MovieCarousel movies={movies}/>
        </main>
    )
}