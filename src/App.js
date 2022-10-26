import React, { Component } from 'react'
import axios from 'axios'
import CityCard from './CityCard';
import './App.css'
import Footer from './Footer';
import Error from './Error';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      cityLat: '',
      cityLon: '',
      error: false,
      errorMessage: '',
      cityMap: '',
      show: false,
      weatherErr: '',
      weatherData: '',
      showWeather: true,
      showWeatherErr: true,
    }
  }



  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    })
  }

  getCityData = async (e) => {
    e.preventDefault();
    console.log(this.state.city);

    try {

      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`
      
      
      let cityData = await axios.get(url);

      console.log(cityData.data[0]);
      this.setState({
        cityData: cityData.data[0],
        error: false,
        cityLat: cityData.data[0].lat,
        cityLon: cityData.data[0].lon,
        showWeather: true,
        showWeatherErr: true,
        show: true
      });
      
      console.log(this.state)
    } catch(error){
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message,
        errorData: error.response.data.error
      })
    }}

    handleWeather = async () => {
      try {
        let lat = this.state.cityLat
        let lon = this.state.cityLon
        const weatherData = await axios.get(`https://sethppierce-city-explorer.herokuapp.com/weather?city_name=${this.state.city}&lat=${lat}&lon=${lon}`)
        this.setState({weatherData: weatherData.data, showWeather: false})
        console.log(this.state.weatherData)
      } catch(error){
        console.log(error);
        const weatherErr = error.response.data
        
      this.setState({weatherErr: weatherErr, showWeather:false, showWeatherErr:false})
      }
    }

    
      

  render() {
    let cityMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=10`
    let cityDisplay;
    if(this.state.show === false){
      cityDisplay = null;
    }
    if(this.state.show === true){
      cityDisplay = <CityCard cityName={this.state.cityData.display_name} 
      cityLat={this.state.cityLat} 
      cityLon={this.state.cityLon} 
      cityMap={cityMapUrl} 
      show={this.state.show}
      weatherErr={this.state.weatherErr}
      weatherData={this.state.weatherData}
      handleWeather={this.handleWeather}
      showWeather={this.state.showWeather}
      showWeatherErr={this.state.showWeatherErr}/>
    }

    console.log(this.state.weatherData);
    return (
      <main>
          <header>
            <h1>City Explorer!</h1>
          </header>
          <nav>
            <form onSubmit={this.getCityData}>
              <label > Pick a City!
                <input type="text" onInput={this.handleInput}/>
                <button type='submit'>Explore!</button>
              </label>
            </form>
          </nav>
          <div>
          {
            this.state.error  ? 
            <Error errorMessage={this.state.errorMessage} errorData={this.state.errorData} weatherErr={this.state.weatherErr}/>
            :
            <p>{cityDisplay}</p>
          }
          </div>
        <Footer/>
      </main>
    );
  }
}