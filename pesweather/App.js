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
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position =>{
        this._getWeather(position.coords.latitude, position.coords.longitude)
        },
    
      error => {
        this.setState({
          error:error
        })
      }
    );
  }
  _getWeather= (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(json=>{
      this.setState({
        temprerature:json.main.temp,
        name:json.weather[0].main,
        isLoaded:true
      })
    });
  };
  

  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (<Weather />) : (
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
