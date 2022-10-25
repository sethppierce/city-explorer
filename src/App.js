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
      display: false
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
        display: true
      });
      
      console.log(this.state)

    } catch(error){
      console.log(error);
      this.setState({
        error: true,
        errorMessage: error.message,
        errorData: error.response.data.error
      })
    }
  }

  render() {
    let cityMapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=10`
    let cityDisplay;
    if(this.state.display === false){
      cityDisplay = null;
    }
    if(this.state.display === true){
      cityDisplay = <CityCard cityName={this.state.cityData.display_name} cityLat={this.state.cityLat} cityLon={this.state.cityLon} cityMap={cityMapUrl} display={this.state.display}/>
    }
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
            <Error errorMessage={this.state.errorMessage} errorData={this.state.errorData}/>
            :
            <p>{cityDisplay}</p>
          }
          </div>
        <Footer/>
      </main>
    );
  }
}