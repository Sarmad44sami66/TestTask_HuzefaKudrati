//import liraries
import React, { Component, useEffect,useRef,useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// create a component
const TopHeader = ({}) => {
    const randomPNLRef = useRef([]);
    const [sum, setsum] = useState('')
    
    setTimeout(() => {
        const generateRandomPNL = (max, min) => {
            const randomValues = [];
            for (let i = 0; i < 4; i++) {
                const randomPNLValue = Math.floor(Math.random() * (max - min + 1)) + min;
                randomValues.push(randomPNLValue);
            }
            randomPNLRef.current = randomValues
            var sum = randomValues.reduce((a, b) => a + b);
            setsum(sum)
        };
        generateRandomPNL(10000, -10000)
    }, 500)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.summary}>
                    <Text style={styles.sumText}>Summary</Text>
                    <View style={styles.headerExpiry}>
                        <View style={styles.expiryView}>
                            <Text style={styles.expiryText}>Expiry</Text>
                            <Image source={require('../assets/images/down.png')}
                                style={styles.arrow} />
                        </View>
                    </View>
                </View>
                <View style={styles.headerBottom}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.headingTitle}>Capital:</Text>
                        <Text style={styles.headingText}>₹5.13 Cr</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.headingTitle}>P&L:</Text>
                        <Text style={styles.headingText}>{sum} {` k (${sum / 100} %)`}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.headingTitle}>Values:</Text>
                        <Text style={styles.headingText}>₹-43.66L(43)</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "#6465FF",
        height: 130,
        marginTop: 20,
        borderRadius: 12
    },
    summary: {
        marginTop: 10,
        marginHorizontal: 10,
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    sumText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    headerExpiry: {
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: 'white',
        width: "45%",
        justifyContent: 'center',
        height: "70%"
    },
    expiryView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 10
    },
    expiryText: {
        fontSize: 12,
        color: 'white',
        fontWeight: '500'
    },
    arrow: {
        width: 10,
        height: 10,
        tintColor: "white",
        alignItems: "center",
        justifyContent: 'center'
    },
    headerBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 10
    },
    headingTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    headingText: {
        fontSize: 12,
        color: 'white',
        marginTop: 10,
        fontWeight: '500'
    }
});

//make this component available to the app
export default TopHeader;
