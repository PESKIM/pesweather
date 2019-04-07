import React, {Component} from 'react';
import { StyleSheet, Text, View,} from 'react-native'
import {LinearGradient} from "expo";
import { Ionicons } from '@expo/vector-icons';
import PropTypes from "prop-types";
/*
export default class Weather extends Component {
    render(){
        return(
            <LinearGradient
                colors={["#00C6FB", "#005BEA"]}
                style={styles.container}>
            <View style={styles.upper}>
                <Ionicons color="white" size={144} name="ios-rainy" />
                <Text style={styles.temp}>10^</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>비온다</Text>
                <Text style={styles.subtitle}>나가지마라</Text>
            </View>
            </LinearGradient>
        );
    }
}
*/

const weatherCases = {
    Rain: {
        colors: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: "ios-rainy"
      },
      Clear: {
        colors: ["#FEF253", "#FF7300"],
        title: "해해해해해",
        subtitle: "Go get your ass burnt",
        icon: "ios-sunny"
      },
      Thunderstorm: {
        colors: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm in the house",
        subtitle: "Actually, outside of the house",
        icon: "ios-lightning"
      },
      Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "나가지마라",
        icon: "ios-cloudy"
      },
      Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: "ios-snowy"
      },
      Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈",
        icon: "ios-hail"
      },
      Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what that is 💩",
        icon: "ios-hail"
      },
      Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        icon: "ios-fog"
      }
};

function Weather({temp, weatherName, location, aqi}) {
    console.log(weatherName)
    return(
        <LinearGradient
            colors={weatherCases[weatherName].colors}
            style={styles.container}>
        <View style={styles.upper}>
            <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
            <Text style={styles.temp}>{temp}^</Text>
        </View>
        <View style={styles.lower}>
            <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
            <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.aqi}>{aqi}</Text>
        </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    aqi: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 32,
        paddingRight: 32,
    },
    upper: {
        flex: 3,
        alignItems:"center",
        justifyContent:"center"

    },
    temp: {
        fontSize: 48,
        color: 'white'
    },

    lower: {
        flex: 1,
        alignItems:"flex-start",
        justifyContent:"flex-end",
    },
    title: {
        fontSize: 52,
        color: 'white',
        fontWeight: "100",
        marginBottom: 8
    },
    subtitle: {
        fontSize: 24,
        color: 'white',
        fontWeight: "800",
        marginBottom: 160
    },
    location: {
        fontSize: 24,
        color: 'white',
        fontWeight: "100",
    },
    aqi: {
        fontSize: 24,
        color: 'white',
        fontWeight: "100",
    },
});