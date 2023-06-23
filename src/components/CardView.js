//import liraries
import React, { Component, useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// create a component
const CardView = ({
    headingText,
    text,
    textStyle,
    finalValue = () => { }
}) => {
    const [sum, setsum] = useState('')
    const [show, setShow] = useState(false)
    const randomPNLRef = useRef([2315, 1473, "-0167", 4568]);

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
        generateRandomPNL(1000, -1000)
    }, 500)
    return (
        <View>
            <TouchableOpacity onPress={() => { setShow(!show), console.log(show) }} activeOpacity={0.6}
                style={styles.cardView}>
                <Text style={styles.cardHeading}>{headingText}</Text>
                <View style={styles.cardTextView}>
                    <Text style={{ ...styles.leftText, marginBottom: 15, ...textStyle }}>{text}</Text>
                    <Text style={styles.currency}>₹
                        <Text style={{ ...styles.rightText, color: sum > 0 ? '#146F30' : 'red', }}>  {sum}{` ( ${sum / 100} %)`}</Text>
                    </Text>
                </View>
            </TouchableOpacity>
            {
                show ?
                    <View style={styles.clickView}>
                        <View style={styles.clickViewIner}>
                            <Text style={styles.titleText}>QTY:</Text>
                            <Text style={styles.titleText}>LTP:</Text>
                            <Text style={styles.titleText}>Val:</Text>
                            <Text style={styles.titleText}>PNL:</Text>
                        </View>
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, alignSelf: 'flex-start' }}>
                            <Text style={{ color: 'black', fontSize: 11, marginTop: 10 }}>1.OPTIDX_BANKNIFTY_O4MAY2023_CE_45000</Text>
                        </View>
                        <View style={styles.clickViewIner}>
                            <Text style={styles.text}>0.00</Text>
                            <Text style={styles.text}>2.30</Text>
                            <Text style={styles.text}>0</Text>
                            <Text style={{ color: randomPNLRef.current[0] > 0 ? '#146F30' : 'red', fontSize: 11, marginTop: 10, width: '10%' }}>{randomPNLRef.current[0]}</Text>
                        </View>
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, alignSelf: 'flex-start' }}>
                            <Text style={{ color: 'black', fontSize: 11, marginTop: 10 }}>2.OPTIDX_BANKNIFTY_O4MAY2023_PE_45000</Text>
                        </View>
                        <View style={styles.clickViewIner}>
                            <Text style={styles.text}>0.00</Text>
                            <Text style={styles.text}>2.30</Text>
                            <Text style={styles.text}>160</Text>
                            <Text style={{ color: randomPNLRef.current[1] > 0 ? '#146F30' : 'red', fontSize: 11, marginTop: 10, width: '10%' }}>{randomPNLRef.current[1]}</Text>
                        </View>
                        <View style={{ alignSelf: 'flex-start' }}>
                            <Text style={{ color: 'black', fontSize: 11, marginTop: 10 }}>3.OPTIDX_BANKNIFTY_O4MAY2023_PE_45000</Text>
                        </View>
                        <View style={styles.clickViewIner}>
                            <Text style={styles.text}>0.00</Text>
                            <Text style={styles.text}>301.45</Text>
                            <Text style={styles.text}>0</Text>
                            <Text style={{ color: randomPNLRef.current[2] > 0 ? '#146F30' : 'red', fontSize: 11, marginTop: 10, width: '10%' }}>{randomPNLRef.current[2]}</Text>
                        </View>
                        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, alignSelf: 'flex-start' }}>
                            <Text style={{ color: 'black', fontSize: 11, marginTop: 10 }}>4.OPTIDX_BANKNIFTY_O4MAY2023_PE_45000</Text>
                        </View>
                        <View style={styles.clickViewIner}>
                            <Text style={styles.text}>0.00</Text>
                            <Text style={styles.text}>241.45</Text>
                            <Text style={styles.text}>-12,0</Text>
                            <Text style={{ color: randomPNLRef.current[3] > 0 ? '#146F30' : 'red', fontSize: 11, marginTop: 10, width: '10%' }}>{randomPNLRef.current[3]}</Text>
                        </View>
                    </View>
                    : null
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        backgroundColor: "white"
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    cardView: {
        marginTop: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: "#aaa"
    },
    cardHeading: {
        color: '#6465FF',
        fontSize: 14,
        fontWeight: '700'
    },
    cardTextView: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    leftText: {
        fontSize: 12,
        color: "#A1A1A7",
        // marginBottom: 15
        fontWeight: "500"
    },
    rightText: {
        fontSize: 12,
        color: "#146F30"
    },
    currency: {
        fontSize: 12,
        color: "black"
    },
    clickView: {
        height: 250,
        marginTop: 20,
        width: "90%"
    },
    clickViewIner: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black'
    },
    text: {
        color: 'black',
        fontSize: 11,
        marginTop: 10,

    },
    heading: {
        color: '#6465FF',
        fontSize: 14,
        fontWeight: '700',
        marginTop: 10
    },

});

//make this component available to the app
export default CardView;
