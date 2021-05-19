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
      movieData: []
    }
  }

  componentDidMount() {
    getMovies()
      .then(data => this.setState({ movies: data.movies, fetchDone: true, movieData: data.movies }))
      .catch(error => this.setState({ error: "Somethine went wrong" }))
  }

  filterMovies = (value) => {
    switch (value) {
      case 'alphabetically':
        this.setState({ movies: this.state.movies.sort((a, b) => {
          if(a.title < b.title) {
            return -1;
          }
          if(a.title > b.title) {
            return 1;
          }
          return 0;
        })})
        break;
      case 'release':
        this.setState({
          movies: this.state.movies.sort((a, b) => {
            if (a.release_date < b.release_date) {
              return 1;
            }
            if (a.release_date > b.release_date) {
              return -1;
            }
            return 0;
          })
        })
        break;
      case 'rating':
        this.setState({
          movies: this.state.movies.sort((a, b) => {
            return b.average_rating - a.average_rating})
        })
        
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <Header filterMovies={this.filterMovies} />
        {this.state.fetchDone && <Dashboard movies={this.state.movies} />}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    )
  }
}

export default App
