import React from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './Header.css';
import logo from '../../assets/rancid_tomatillos_logo.jpg';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';

export default function Header({ filterMovies, searchMovies, movies }) {
  const windowWidth = window.innerWidth;
  const defaultForm = (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Search searchMovies={searchMovies} />
      <Filter movies={movies} filterMovies={filterMovies} />
    </form>
  );
  const hamburger = (
    <Hamburger
      movies={movies}
      searchMovies={searchMovies}
      filterMovies={filterMovies}
    />
  );
  return (
    <header className='header'>
      {windowWidth < 625 ? hamburger : defaultForm}
      {/* <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Search searchMovies={searchMovies} />
        <Filter movies={movies} filterMovies={filterMovies} />
      </form> */}
      <Link to={'/'} className='logo'>
        <img className='logo' src={logo} alt='Rancid Tomatillos Logo' />
      </Link>
    </header>
  );
}
