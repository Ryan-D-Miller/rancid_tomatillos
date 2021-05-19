import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component {
  // constructor() {
  //   super();
  // }

  handleChange = (event) => {
    this.props.searchMovies(event.target.value.toUpperCase())
  }

  render() {
    return (
      <input
        type='search'
        onChange={this.handleChange}
        placeholder='Search Movies...'>
      </input>
    )
  }
}
