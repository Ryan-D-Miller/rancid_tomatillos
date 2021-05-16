import React, { Component } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieCarousel.css'
import CarouselButton from '../CarouselButton/CarouselButton';

class MovieCarousel extends Component {
  constructor() {
    super();
    this.state = {
      displayStart: 0,
      displayRange: 5
    }
  }

  render() {
    
    return (
      <section className="carousel">
        <CarouselButton direction={"left"} updateDisplayStart={this.props.updateDisplayStart}/>
        {this.props.displayMovies()}
        <CarouselButton direction={"right"} updateDisplayStart={this.props.updateDisplayStart}/>
      </section>
    )
  }
}

export default MovieCarousel