import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FleetScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Manage Fleet Section</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    fontFamily: "Helvetica-Neue-Medium"
  }
});

export default FleetScreen;