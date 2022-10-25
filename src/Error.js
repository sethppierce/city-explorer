import React, { Component } from 'react'
import './Error.css'

export default class Error extends Component {
  render() {
    return (
      <div id='error'>
        <h3>{this.props.errorMessage}</h3>
        <p>{this.props.errorData}</p>
      </div>
    )
  }
}
