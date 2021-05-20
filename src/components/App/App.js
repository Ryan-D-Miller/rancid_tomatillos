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
      moviesToDisplay: []
    }
  }

  componentDidMount() {
    getMovies()
      .then(data => this.setState({ movies: data.movies, fetchDone: true, moviesToDisplay: [...data.movies] }))
      .catch(error => this.setState({ error: "Somethine went wrong" }));
  }

  filterMovies = (value) => {
    if (this.state.moviesToDisplay) {
      switch (value) {
        case 'alphabetically':
          this.setState({
            moviesToDisplay: this.state.moviesToDisplay.sort((a, b) => {
              if (a.title < b.title) {
                return -1;
              }
              if (a.title > b.title) {
                return 1;
              }
              return 0;
            })
          })
          break;
        case 'release':
          this.setState({
            moviesToDisplay: this.state.moviesToDisplay.sort((a, b) => {
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
            moviesToDisplay: this.state.moviesToDisplay.sort((a, b) => {
              return b.average_rating - a.average_rating
            })
          })

          break;
        case '':
          console.log("im here")
          this.setState({
            moviesToDisplay: this.state.movies
          });
          break;
      }
    }
  }

  searchMovies = (query) => {
    if (query && this.state.movies.some(m => m.title.toUpperCase().includes(query))) {
      let filteredMovies = this.state.movies.filter(m => m.title.toUpperCase().includes(query));
      this.setState({ moviesToDisplay: filteredMovies })
    } else if (query && !this.state.movies.some(m => m.title.toUpperCase().includes(query))) {
      this.setState({ moviesToDisplay: '' })
    } else {
      this.setState({ moviesToDisplay: this.state.movies })
    }
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
