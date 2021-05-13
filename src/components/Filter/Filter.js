import React, { Component } from 'react'

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
     <select name='selection' onChange={this.handleChange}>
      <option value=''>Filter movies by...</option>
      <option value='alphabetically'>Alphabetically</option>
      <option value='rating'>Rating</option>
      <option value='release'>Release</option>
     </select>
    )
  }
}
