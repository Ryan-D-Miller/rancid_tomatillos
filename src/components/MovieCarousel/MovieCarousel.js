import React, { Component } from 'react';

class MovieCarousel extends Component {
  constructor() {
    super();
    this.state = {
      displayStart: 0,
      displayRange: 5
    }
  }

  checkMoviesLength(rangeCheck) {
    if (rangeCheck < 0) {
      return this.props.movies.length + rangeCheck;
    } else if (rangeCheck > this.props.movies.length) {
      return (rangeCheck - this.props.movies.length) - 1;
    }
    return rangeCheck;
  }

  updateDisplayStart = (direction) => {
    if (direction === 'left') {
      const startingIndex = this.checkMoviesLength(this.state.displayStart - this.state.displayRange)
      this.setState({ displayStart: startingIndex })
    } else {
      const startingIndex = this.checkMoviesLength(this.state.displayStart + this.state.displayRange)
      this.setState({ displayStart: startingIndex })
    }
  }

  updateDisplayRange = (start, end) => {
    this.setState({ displayStart: start, displayEnd: end })
  }

  selectMoviesToDisplay() {
    const movies = []
    for (let i = 0; i < this.state.displayRange; i++) {
      if (i + this.state.displayStart > this.props.movies.length) {
       movies.push(<MovieCard movie={this.props.movies[this.checkMoviesLength(i + this.state.displayStart)]} />)
      }
      movies.push(<MovieCard movie={this.props.movies[i + this.state.displayStart]} />)
    }
    return movies
  }

  render() {

    return (
      <div>
        {this.selectMoviesToDisplay()}
      </div>
    )
  }
}

export default MovieCarousel