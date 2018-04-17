import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "80618738d5f2464e5f6498cfae94b325";


class App extends Component {


    state= {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

  //Server Gets API Data through Async/Await  
  getWeather = async (e) => {
      e.preventDefault();

      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=UTF-8
      `);
      const data = await api_call.json();
      console.log(data);
      this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
      })
  }


  render() {



    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Weather API</h1>
        </header>
        <p className="App-intro">
          []
        </p>

        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
                temperature ={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}                                
                
                />
      </div>
    );
  }
}

export default App;