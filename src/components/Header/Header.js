import React from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './Header.css';
import logo from '../../assets/rancid_tomatillos_logo.jpg';
import { Link } from 'react-router-dom';
// import Hamburger from '../Hamburger/Hamburger';

export default function Header({ filterMovies, searchMovies, movies }) {
  return (
    <header className='header'>
      {/* add conditional rendering for hamburger later */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Search searchMovies={searchMovies} />
        <Filter movies={movies} filterMovies={filterMovies} />
      </form>
      <Link to={'/'} className='logo'>
        <img className='logo' src={logo} alt='Rancid Tomatillos Logo' />
      </Link>
    </header>
  );
}
