import React from 'react';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import './Header.css';
// import Hamburger from '../Hamburger/Hamburger';

export default function Header({filterMovies}) {
    return (
        <div>
          {/* add conditional rendering for hamburger later */}
            <form>
                {/* <Search /> */}
                <Filter filterMovies={filterMovies}/>
            </form>
            <img src='' alt='Rancid Tomatillos Logo' />
        </div>
    )
}