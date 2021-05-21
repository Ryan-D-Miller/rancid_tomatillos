import React from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import { slide as Menu } from 'react-burger-menu';
import './Hamburger.css';

export default function Hamburger({ movies, searchMovies, filterMovies }) {
  return (
    <Menu>
      <Search searchMovies={searchMovies} />
      <Filter movies={movies} filterMovies={filterMovies} />
    </Menu>
  );
}
