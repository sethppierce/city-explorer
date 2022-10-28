import React, { Component } from 'react'
import axios from 'axios';
import './Movies.css';
import MovieItem from './MovieItem';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movieErr: true,
    }
  }
  componentDidUpdate(){
    this.getMovieData();
  }
  componentDidMount(){
    this.getMovieData();
  }
  getMovieData = async () => {
    try {
      let url = `https://sethppierce-city-explorer.herokuapp.com/movies?city_name=${this.props.city}`
      // let url = `https://localhost:3001/movies?city_name=${this.props.city}`
      let movieData = await axios.get(url);
      this.setState({
        movies: movieData.data,
        movieErr: false,
      })
    } catch (error) {
      this.setState({
        movieErr: true,
      })
    }
  }
  render() {

    let allMovies = this.state.movies.map((item, index) => {
      return <MovieItem item={item} key={index}/>
    })
    return (
      <div id='movieContainer'>
          {allMovies}
      </div>
    )
  }
}
