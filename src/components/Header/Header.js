import React from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './Header.css';
import logo from "../../assets/rancid_tomatillos_logo.jpg"
// import Hamburger from '../Hamburger/Hamburger';

export default function Header({filterMovies}) {
    return (
        <header className="header">
          {/* add conditional rendering for hamburger later */}
            <form>
                <Search />
                <Filter filterMovies={filterMovies}/>
            </form>
            {/* <h1 className="movie_titles">Helloooo!</h1> */}
            <img className="logo" src={logo} alt='Rancid Tomatillos Logo'/>
        </header>
    )
}