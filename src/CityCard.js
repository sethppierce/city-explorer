import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import './CityCard.css'
import WeatherData from './WeatherData';
import Movies from './Movies';

export default class CityCard extends Component {
  
  componentDidMount(){
    this.props.handleWeather();
  }
  

  render() {
    return (
      <div id='container' display={this.props.show}>
        <Card id='card'>
          <div id='titleCard'>
            <Card.Title>{this.props.cityName}</Card.Title>
            <Card.Text display={this.props.show}>
            {this.props.cityLat},{this.props.cityLon}
            </Card.Text>
          </div>
          <div id='weatherContainer'>
              <WeatherData weatherData={this.props.weatherData} weatherErr={this.props.weatherErr} showWeatherErr={this.props.showWeatherErr}/>
          </div>
          <Card.Img variant="bottom" src={this.props.cityMap} id='map' />
        </Card>
        <div id='movieBorder'>Popular movies from this city!</div>
        <Movies city={this.props.city}/>
      </div>
    );
  }
}