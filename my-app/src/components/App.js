import React, { Component } from 'react';
import '../styles/App.css';
import Result from './Result';

class App extends Component {
  state = {
    cities: [],
    activeCityId: "",
    date: "",
    fullData: [],
    precipitationToday: "",
    humidityToday: "",
    windSpeedToday: "",
    windDirectionToday: "",
    pollenCountToday: "",
  }

  componentDidMount() {
    window.addEventListener('load', this.handleCityList);

    const x = new Date();
    let year = x.getFullYear().toString();
    let month = (x.getMonth() + 1).toString();
    let day = x.getDate().toString();
    (day.length === 1) && (day = '0' + day);
    (month.length === 1) && (month = '0' + month);
    const time = `${year}-${month}-${day}`

    this.setState({
      date: time,
    })
  }

  handleCityList = () => {

    const API = 'http://dev-weather-api.azurewebsites.net/api/city';

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Ups, something went wrong")
      })
      .then(response => response.json())
      .then(data => {

        this.setState({
          cities: data
        })
      }
      )
  }




  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      activeCityId: value,
    })
  }
  componentDidUpdate(propsState, prevState) {

    if (this.state.activeCityId !== prevState.activeCityId) {
      const API = `http://dev-weather-api.azurewebsites.net/api/city/${this.state.activeCityId}/weather?date=${this.state.date}`;

      fetch(API)
        .then(response => {
          if (response.ok) {
            return response
          }
          throw Error("Ups, something went wrong")
        })
        .then(response => response.json())
        .then(data => {
          this.setState({
            fullData: data,
            precipitationToday: data[0].precipitation,
            humidityToday: data[0].humidity,
            windSpeedToday: data[0].windInfo.speed,
            windDirectionToday: data[0].windInfo.direction,
            pollenCountToday: data[0].pollenCount,
          })
        })
    }
  }

  render() {
    const cities = this.state.cities.map(city => <option key={city.id} value={city.id} name={city.name}>{city.name}</option>)

    return (
      <div className="App">
        <select onChange={this.handleChange}>
          <option value="" hidden>Select City</option>
          {cities}
        </select>
        <Result poll={this.state.pollenCountToday} wDire={this.state.windDirectionToday} wSpeed={this.state.windSpeedToday} humi={this.state.humidityToday} prec={this.state.precipitationToday} temp={this.state.fullData} />
      </div>
    )
  }
}


export default App;
