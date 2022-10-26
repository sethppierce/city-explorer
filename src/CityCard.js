import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './CityCard.css'
import WeatherData from './WeatherData';

export default class CityCard extends Component {

  render() {
    return (
      <div id='container' display={this.props.show}>
        <Card id='card'>
        <Card.Body>
          <Card.Title>{this.props.cityName}</Card.Title>
          <Card.Text display={this.props.show}>
            {this.props.cityLat},{this.props.cityLon}
          </Card.Text>
          <div id='weatherContainer'>
            {
            this.props.showWeather
            ?
            <button onClick={this.props.handleWeather}>Find Out the Weather!</button>
            :  
              <WeatherData weatherData={this.props.weatherData} weatherErr={this.props.weatherErr} showWeatherErr={this.props.showWeatherErr}/>
            }
          </div>
        </Card.Body>
        <Card.Img variant="bottom" src={this.props.cityMap} />
        </Card>
      </div>
    );
  }
}