//import liraries
import React, { Component, useState, useCallback, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, useAnimatedValue } from 'react-native';
import { RefreshControl } from 'react-native';
import TopBar from './src/components/TopBar';
import TopHeader from './src/components/TopHeader';
import CardView from './src/components/CardView';
// create a component
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <TopBar />
          <TopHeader />
          <CardView headingText={"GSA BNF Directional"} text={'Live-Entered'}  />
          <CardView headingText={"GSA Nifty Directional"} text={'Exited'} textStyle={{ color: "#bf9b30" }}  />
          <CardView headingText={"Banknifty Fighter Lite Positional"} text={'Live-Entered'}  />
          <CardView headingText={"Banknift Fighter Positional"} text={'Live-Entered'}  />
          <CardView headingText={"Overnight Miner"} text={'Exited'} textStyle={{ color: "#bf9b30" }}  />
          <CardView headingText={"Overnight Miner Nifty"} text={'Exited'} textStyle={{ color: "#bf9b30" }}  />
        </View>
      </ScrollView>
    </SafeAreaView>
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
});

//make this component available to the app
export default App;