import React from 'react';
import './Search.css'

export default function Search(props) {
  return (
    <input
      type='search'
      onChange={props.searchMovies}
      placeholder='Search Movies...'>
    </input>
  )
}
