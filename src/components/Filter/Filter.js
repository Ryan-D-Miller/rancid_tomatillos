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
    this.setState({ [event.target.name]: event.target.value });
    this.props.filterMovies(event.target.value);
  }

  render() {
    return (
        <select className="filter" name='selection' onChange={this.handleChange}>
          <option value=''>Filter Movies...</option>
          <option value='alphabetically'>Alphabetically</option>
          <option value='rating'>Rating</option>
          <option value='release'>Release Date</option>
      </select>
    )
  }
}
