import React, { Component } from 'react';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import MovieFocus from '../MovieFocus/MovieFocus'
import MovieCard from '../MovieCard/MovieCard';
import './Dashboard.css';
import { getSingleMovie } from '../../apiCalls';
import { Link, Route } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            focus: false,
            movie: '',
            displayStart: 0,
            displayRange: 5
        }
    }

    // movieSelect = id => {
    //     // const movieId = Number(event.target.id);
    //     getSingleMovie(id)
    //         .then(data => this.setState({ focus: true, movie: data.movie }))
    // }

    focusClose = () => {
        this.setState({ focus: false, movie: '' })
    }

    checkMoviesLength = (rangeCheck) => {
        if (rangeCheck < 0) {
            return this.props.movies.length + rangeCheck;
        } else if (rangeCheck > this.props.movies.length - 1) {
            return (rangeCheck - this.props.movies.length);
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

    selectMoviesToDisplay = () => {
        const movies = []
        for (let i = 0; i < this.state.displayRange; i++) {
            if (i + this.state.displayStart > this.props.movies.length - 1) {
                movies.push(this.props.movies[this.checkMoviesLength(i + this.state.displayStart)])
            } else {
                movies.push(this.props.movies[i + this.state.displayStart])
            }
        }
        return movies
    }

    displayMovies = () => {
        const selectedMovies = this.selectMoviesToDisplay();
        return selectedMovies.map(m => <Link to={`/${m.id}`} className="card"><MovieCard key={m.id} movie={m} 
        // handleClick={this.movieSelect} 
        /></Link>);
    }

    render() {
        return (
            <main
                className="dashboard">
                {this.props.error && <p>{this.props.error}</p>}
                {/* {//do a redirect} */}
                <Route 
                    exact
                    path='/'
                    render= {() => {
                        return <MovieCarousel
                            checkMoviesLength={this.checkMoviesLength}
                            displayMovies={this.displayMovies}
                            updateDisplayStart={this.updateDisplayStart} />
                    }}
                />
                    <Route
                    exact
                    path='/:id'
                    render={({match}) => {
                        const { id } = match.params
                        return <MovieFocus />
                    }}
                    />
                {this.state.focus && <MovieFocus movie={this.state.movie} focusClose={this.focusClose} />}
            </main>
        )
    }
}