import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = (props) => {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" /> 
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/appLogo.png")}
          style={styles.logo}
        />
      </View>

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={30} color="#D4D4D4" />
          <TextInput 
            style={styles.input} 
            placeholder="E-mail" 
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={30} color="#D4D4D4" />
          <TextInput 
            style={styles.input} 
            placeholder="Password" 
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.3}>
        <Text style={styles.forgotPasswordText}>Forgot your Password?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.3} >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    marginTop: 125,
    width: 300,
    height: 200,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  inputsContainer: {
    width: "80%",
  },
  inputContainer: {
    height: 70,
    paddingLeft: 20,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "5%",
    elevation: 5,
    borderRadius: 20
  },
  input: {
    width: "80%",
    paddingLeft: 15,
    fontFamily: "Helvetica-Neue-Medium",
    fontSize: 18,
    borderRadius: 7,
  },
  forgotPasswordText: {
    marginTop: "5%",
    fontSize: 20,
    fontFamily: "Helvetica-Neue-Medium",
    color: "#1ac0cb",
  },
  buttonContainer: {
    marginTop: "10%",
    width: "80%"
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "#1ac0cb",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "Helvetica-Neue-Medium",
    color: "white"
  }
});

export default LoginScreen;
