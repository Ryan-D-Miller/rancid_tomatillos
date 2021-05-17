import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import movieData from '../../movieData';
import './App.css';
import {
  getMovies
} from '../../apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount() {
    // fetch(' https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    // .then(response => response.json())
    getMovies()
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({error: "Somethine went wrong"}))
  }
  
  filterMovies = (value) => {
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
        <Dashboard movies={this.state.movies} error={this.state.error} />
      </div>
    )
  }
}

export default App
