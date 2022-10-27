import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './Movies.css'

export default class MovieItem extends Component {
  render() {
    let src = this.props.item.img ? `https://image.tmdb.org/t/p/original/${this.props.item.img}` : 'https://via.placeholder.com/150?text=No+Img+Found'

    return (
    <Card className='movieCard'>
      <Card.Img variant="top" className='movieImg' src={src} />
      <Card.Body>
        <Card.Title id='movieTitle'>{this.props.item.title}</Card.Title>
        <Card.Text id='movieDescription'>
          Released On: {this.props.item.releaseDate}
        </Card.Text>
      </Card.Body>
    </Card>
    )
  }
}
