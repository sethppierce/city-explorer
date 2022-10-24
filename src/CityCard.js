import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './CityCard.css'

export default class CityCard extends Component {
  render() {
    return (
      <div id='container' display={this.props.display}>
        <Card id='card'>
        <Card.Body>
          <Card.Title>{this.props.cityName}</Card.Title>
          <Card.Text display={this.props.display}>
            {this.props.cityLat},{this.props.cityLon}
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src={this.props.cityMap} />
        </Card>
      </div>
    );
  }
}