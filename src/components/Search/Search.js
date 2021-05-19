import React from 'react'

export default function Search(props) {
  return (
    <input
      type='search'
      onChange={props.searchMovies}
      placeholder='Search Movies...'>
    </input>
  )
}
