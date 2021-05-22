import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Header from '../Header/Header';
import './App.css';
import { getMovies } from '../../apiCalls';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard/MovieCard';
// import {  CSSTransitionGroup } from 'react-transition-group';
// import ReactCSSTransitionGroup from 'react-transition-group';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      fetchDone: false,
      moviesToDisplay: [],
      displayStart: 0,
      displayRange: 5,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    getMovies()
      .then((data) =>
        this.setState({
          movies: data.movies,
          fetchDone: true,
          moviesToDisplay: [...data.movies],
        })
      )
      .catch((error) => this.setState({ error: 'Somethine went wrong' }));
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = (e) => {
    const windowWidth = window.innerWidth;
    this.breakPoints(windowWidth);
  };

  breakPoints = (windowWidth) => {
    if (windowWidth < 625 && this.state.displayRange != 1) {
      this.setState({ displayRange: 1 });
    } else if (
      windowWidth < 865 &&
      this.state.displayRange != 2 &&
      windowWidth > 625
    ) {
      this.setState({ displayRange: 2 });
    } else if (
      windowWidth < 1076 &&
      this.state.displayRange > 3 &&
      windowWidth > 865
    ) {
      this.setState({ displayRange: 3 });
    } else if (
      windowWidth < 1288 &&
      this.state.displayRange != 4 &&
      windowWidth > 1076
    ) {
      this.setState({ displayRange: 4 });
    } else if (windowWidth > 1288 && this.state.displayRange != 5) {
      this.setState({ displayRange: 5 });
    }
  };

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
            }),
            displayStart: 0,
          });
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
            }),
            displayStart: 0,
          });
          break;
        case 'rating':
          this.setState({
            moviesToDisplay: this.state.moviesToDisplay.sort((a, b) => {
              return b.average_rating - a.average_rating;
            }),
            displayStart: 0,
          });

          break;
        case '':
          this.setState({
            moviesToDisplay: this.state.movies,
          });
          break;
      }
    }
  };

  searchMovies = (query) => {
    if (
      query &&
      this.state.movies.some((m) => m.title.toUpperCase().includes(query))
    ) {
      let filteredMovies = this.state.movies.filter((m) =>
        m.title.toUpperCase().includes(query)
      );
      this.setState({ moviesToDisplay: filteredMovies });
    } else if (
      query &&
      !this.state.movies.some((m) => m.title.toUpperCase().includes(query))
    ) {
      this.setState({ moviesToDisplay: '' });
    } else {
      this.setState({ moviesToDisplay: this.state.movies });
    }
  };

  checkMoviesLength = (rangeCheck) => {
    if (rangeCheck < 0) {
      return this.state.moviesToDisplay.length + rangeCheck;
    } else if (rangeCheck > this.state.moviesToDisplay.length - 1) {
      return rangeCheck - this.state.moviesToDisplay.length;
    }
    return rangeCheck;
  };

  updateDisplayStart = (direction) => {
    if (direction === 'left') {
      const startingIndex = this.checkMoviesLength(
        this.state.displayStart - this.state.displayRange
      );
      this.setState({ displayStart: startingIndex });
    } else {
      const startingIndex = this.checkMoviesLength(
        this.state.displayStart + this.state.displayRange
      );
      this.setState({ displayStart: startingIndex });
    }
  };

  updateDisplayRange = (start, end) => {
    this.setState({ displayStart: start, displayEnd: end });
  };

  selectMoviesToDisplay = () => {
    let movies = [];
    for (let i = 0; i < this.state.displayRange; i++) {
      if (this.state.moviesToDisplay.length > this.state.displayRange) {
        if (
          i + this.state.displayStart >
          this.state.moviesToDisplay.length - 1
        ) {
          movies.push(
            this.state.moviesToDisplay[
              this.checkMoviesLength(i + this.state.displayStart)
            ]
          );
        } else {
          movies.push(this.state.moviesToDisplay[i + this.state.displayStart]);
        }
      } else {
        movies = [...this.state.moviesToDisplay];
      }
    }
    return movies;
  };

    displayMovies = () => {
        if (this.state.moviesToDisplay) {
            const selectedMovies = this.selectMoviesToDisplay();
          return selectedMovies.map(m => 
            <Link to={`/${m.id}`} className="card" key={m.id}><MovieCard movie={m}
            /></Link>);
        }
    }
  // };

  render() {
    return (
      <div className='App'>
        <Header
          movies={this.state.moviesToDisplay}
          filterMovies={this.filterMovies}
          searchMovies={this.searchMovies}
        />
        {this.state.fetchDone && (
          <Dashboard
            movies={this.state.moviesToDisplay}
            filtered={this.state.filtered}
            checkMoviesLength={this.checkMoviesLength}
            displayMovies={this.displayMovies}
            updateDisplayStart={this.updateDisplayStart}
          />
        )}
        {this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
}

export default App;
