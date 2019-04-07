import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './Weather';

const API_KEY = "46d35abfe6b762e06a96e8e37df66918"

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temprerature: null,
    name: null,
    location: null,
    aqi: null,
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position =>{
        this.setState(
          console.log(position)
        )
        this._getWeather_1(position.coords.latitude, position.coords.longitude)
        this._getWeather_2(position.coords.latitude, position.coords.longitude)
        },
    
      error => {
        this.setState({
          error:error
        })
      }
    );
  }
  _getWeather_1= (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        temperature:json.main.temp,
        name:json.weather[0].main,
        location:json.name,
        isLoaded:true,

      })
    });
  };

  _getWeather_2= (lat, lon) => {
    fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=3bd95e01d2fb8182f090ba66fc69eab01a3595c4`)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        aqi:json.data.aqi
      })
    });
  };
  

  render() {
    const { isLoaded, error, temperature, name, location, aqi } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (<Weather temp={Math.floor(temperature - 273.15)} weatherName={name} location={location} aqi={aqi} />) : (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Welcome</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  errorText: {
    color:'red',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 38
  }
});
