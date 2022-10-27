import React, { Component } from 'react'
import './WeatherData.css'
import WeatherAccord from './WeatherAccord';


export default class WeatherData extends Component {
  render() {
    return (
    <>
      <h1 id='weatherData'>WeatherData</h1>
      <div id='weathercontainer'>
            {this.props.showWeatherErr ?
              this.props.weatherData.description.map((item, index) => {
                return <WeatherAccord id='weatherDataItem' key={index} date={item.date} description={item.description}/>}): <p id='weatherErr'>{this.props.weatherErr.toUpperCase()}</p>
            }
      </div>
    </>
  
    )
  }
}