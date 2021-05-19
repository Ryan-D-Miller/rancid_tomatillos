import React, { Component } from 'react'

export default class Search extends Component {
  constructor() {
    super();
    // this.state = {
    //   query: ''
    // }
  }

  render() {
    return (
      <input 
        type='search'
        onChange={this.props.searchMovies}
        placeholder='Search Movies...'>

      </input>
    )
  }
}
