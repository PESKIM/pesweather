import React, {Component} from 'react';
import { StyleSheet, Text, View,} from 'react-native'
import {LinearGradient} from "expo";
import { Ionicons } from '@expo/vector-icons';

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
        fontSize: 48
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
});