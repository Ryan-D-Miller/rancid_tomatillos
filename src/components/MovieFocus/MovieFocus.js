import React, { Component } from 'react';
import './MovieFocus.css';
import { Link } from 'react-router-dom';
import { getSingleMovie } from '../../apiCalls';
import { Redirect } from 'react-router-dom';
// ({ movie, focusClose })
export default class MovieFocus extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
    };
  }

  componentDidMount() {
    getSingleMovie(parseInt(this.props.id))
      .then((data) => this.setState({ movie: data.movie }))
      .catch((err) => console.log(err));
  }

  render = () => {
    const { movie } = this.state;
    return (
      <div>
        {movie && (
          <div id={movie.id} className='focus'>
            <header className='focus-header'>
              <Link type='button' className='link' to='/'>
                x
              </Link>
              <div className='header_title'>
                <h1>{movie.title}</h1>
                <p className='top_line'>{movie.tagline}</p>
                <p>Release Date: {movie.release_date}</p>
              </div>
            </header>
            <img src={movie.backdrop_path} alt={movie.title} />
            <section className='overview'>
              <p>Overview:</p>
              <div>{movie.overview}</div>
            </section>
            <footer>
              <section className='focus-footer top_line'>
                <p className='footer-text'>
                  Rating: {movie.average_rating.toFixed(1)}
                </p>
                <p className='footer-text'>
                  Revenue: ${movie.revenue.toLocaleString('en-US')}
                </p>
                <p className='footer-text'>
                  Budget: ${movie.budget.toLocaleString('en-US')}
                </p>
                <p className='footer-text'>Run Time: {movie.runtime} minutes</p>
              </section>
              <section className='focus-footer top_line'>
                <p>Genres</p>
              </section>
              <section className='focus-footer'>
                {movie.genres.map((genre) => {
                  return <p>{genre}</p>;
                })}
              </section>
            </footer>
          </div>
        )}
      </div>
    );
  };
}
