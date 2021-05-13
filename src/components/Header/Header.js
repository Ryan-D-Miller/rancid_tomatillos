import React from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './Header.css';
import logo from "../../Data/tempLogo.jpeg"
// import Hamburger from '../Hamburger/Hamburger';

export default function Header({filterMovies}) {
    return (
        <header className="header">
          {/* add conditional rendering for hamburger later */}
            <form>
                {/* <Search /> */}
                <Filter filterMovies={filterMovies}/>
            </form>
            <img className="logo" src={logo} alt='Rancid Tomatillos Logo'/>
        </header>
    )
}