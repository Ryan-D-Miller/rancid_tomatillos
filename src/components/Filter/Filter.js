import React, { Component } from 'react';
import './Filter.css'

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      selection: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    this.props.filterMovies(event.target.value);
  }

  render() {
    return (
      <select disabled={this.props.movies ? false : true} className="filter" name='selection' onChange={this.handleChange} onSubmit={e => { e.preventDefault(); }}>
          <option value=''>Filter Movies...</option>
          <option value='alphabetically'>Alphabetically</option>
          <option value='rating'>Rating</option>
          <option value='release'>Release Date</option>
      </select>
    )
  }
}
