import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import movieData from '../../movieData';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
    }
  }

  // componentDidMount() {
  // put the fetch here
  // }
  filterMovies = (value) => {
    console.log(value);
    switch (value) {
      case 'alphabetically':
        // code to filter this.state.movies
        break;
      case 'release':
        
        break;
      case 'rating':
        
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Header filterMovies={this.filterMovies}/>
        <Dashboard movies={this.state.movies} />
      </div>
    )
  }
}

export default App
