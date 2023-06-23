//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';

// create a component
const TopBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bar}>
                <Image source={require('../assets/images/menu.png')}
                    style={styles.nav} />
                <Text style={styles.barText}>Strategies</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bar: {
        flexDirection: 'row',
        alignItems: "center"
    },
    nav: {
        height: 30,
        width: 30,
        tintColor: 'black'
    },
    barText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: "30%"
        
    },
});

//make this component available to the app
export default TopBar;
