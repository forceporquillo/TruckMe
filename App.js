import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

import LoginScreen from './screens/LoginScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    "Helvetica-Neue-Medium": require("./assets/fonts/Helvetica-Neue-Medium.ttf")
  });
}

export default function App() {
  const [appLoaded, setAppLoaded] = useState(false);

  if (!appLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setAppLoaded(true)} 
        onError={(err) => console.log(err)} 
      />
    );
  }

  return (
    <LoginScreen></LoginScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: "Helvetica-Neue-Medium",
    fontSize: 16,
    textAlign: 'center'
  }
});
