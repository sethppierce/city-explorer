import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './Movies.css'

export default class MovieItem extends Component {
  render() {
    return (
    <Card className='movieCard'>
      <Card.Img variant="top" className='movieImg' src={`https://image.tmdb.org/t/p/original/${this.props.item.img}`} />
      <Card.Body>
        <Card.Title id='movieTitle'>{this.props.item.title}</Card.Title>
        <Card.Text id='movieDescription'>
          {this.props.item.overview}
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}
