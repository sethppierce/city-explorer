import React, { Component } from 'react'
import './WeatherData.css'


export default class WeatherData extends Component {
  render() {
    return (
    <>
      <h1 id='weatherData'>WeatherData</h1>
      <div id='weathercontainer'>
            {this.props.showWeatherErr ?
              <ul id='weatherDataContain'>
              {this.props.weatherData.description.map((item, index) => {
                return <li id='weatherDataItem' key={index}>{item.date} {item.description}</li>})}
              </ul> : <p id='weatherErr'>{this.props.weatherErr.toUpperCase()}</p>
            }
      </div>
    </>
  
    )
  }
}