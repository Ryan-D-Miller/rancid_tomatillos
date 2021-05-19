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
      error: '',
      fetchDone: false,
      query: '',
      moviesToDisplay: []
    }
  }

  componentDidMount() {
    // fetch(' https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    // .then(response => response.json())
    getMovies()
      .then(data => this.setState({ movies: data.movies, fetchDone: true, moviesToDisplay: data.movies }))
      .catch(error => this.setState({ error: "Somethine went wrong" }));

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

  searchMovies = event => {
    event.preventDefault();
    this.setState({ query: event.target.value.toUpperCase() });
    if (this.state.query) {
      let filteredMovies = this.state.movies.filter(m => m.title.toUpperCase().includes(this.state.query));
      return this.setState({ moviesToDisplay: filteredMovies })
    }
    this.setState({moviesToDisplay: this.state.movies})
    // console.log(movies);
  }

  render() {
    return (
      <div className="App">
        <Header filterMovies={this.filterMovies} searchMovies={this.searchMovies} />
        {this.state.fetchDone && <Dashboard movies={this.state.moviesToDisplay} />}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

export default App
