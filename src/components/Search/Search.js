import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  handleChange = (event) => {
    event.preventDefault();
    this.props.searchMovies(event.target.value.toUpperCase());
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <input
        type='search'
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onChange={this.handleChange}
        placeholder='Search Movies...'
      ></input>
    );
  }
}
