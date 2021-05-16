import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCarousel.css'
import CarouselButton from '../CarouselButton/CarouselButton';

// class MovieCarousel extends Component {
//   constructor() {
//     super();
//     this.state = {
//       displayStart: 0,
//       displayRange: 5
//     }
//   }
export default function MovieCarousel({displayMovies, updateDisplayStart}) {
    
    return (
      <section className="carousel">
        <CarouselButton direction={"left"} updateDisplayStart={updateDisplayStart}/>
        {displayMovies()}
        <CarouselButton direction={"right"} updateDisplayStart={updateDisplayStart}/>
      </section>
    )
}