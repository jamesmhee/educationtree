import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
const SignInScreen = (props) => {
  return (
    <View style={styles.font}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../images/iBook.png")} />
        </View>
        <View
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "white",
            marginTop: 30,
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
        <Ionicons name="ios-arrow-back" size={40} color="black" style={styles.iconBack}
        onPress={() => {props.navigation.popToTop()}}
        />
          <Text style={styles.welcome}>Welcome</Text>
          <TextInput
            placeholder="Username"
            placeholderTextColor="rgba(19, 15, 64,0.5)"
            returnKeyType="next"
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="rgba(19, 15, 64,0.5)"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            // ref={(input) => this.passwordInput = input}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191927",
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
  },
  input: {
    height: 50,
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 30,
    paddingHorizontal: 20,
    borderColor: "#191927",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 300,
    fontSize: 16,
    fontFamily:'kanitLight',
  },
  welcome: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 30,
    color: "black",
    paddingRight: 100,
    fontFamily:'kanitLight',
  },
  buttonContainer: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 300,
    fontFamily:'kanitLight',
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    fontFamily:'kanitLight',
  },
  iconBack: {
    paddingRight: 275,
    marginBottom: 30,
  },
  font:{
    fontFamily:'kanitLight',
  }
});
export default SignInScreen;