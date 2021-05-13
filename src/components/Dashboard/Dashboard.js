import React, { Component } from 'react';
import MovieCarousel from '../MovieCarousel/MovieCarousel';
import MovieFocus from '../MovieFocus/MovieFocus'
import './Dashboard.css';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            focus: false,
            movie: ''
        }
    }

    movieSelect = event => {
        const movieId = Number(event.target.id);
        const movie = this.props.movies.find(m => m.id === movieId);
        if (movie) {
            this.setState({focus: true, movie: movie})
        }
    }

    handleClick = event => {
        this.movieSelect(event);
    }

    render() {
        return (
            <main 
            className="dashboard"
            onClick={this.handleClick}>
                {!this.state.focus && <MovieCarousel movies={this.props.movies} />}
                {this.state.focus && <MovieFocus movie={this.state.movie} />}
            </main>
        )
    }
}
// export default function Dashboard({movies}) {
//     return (
//         <main className="dashboard">
//             <MovieCarousel movies={movies}/>
//         </main>
//     )
// }