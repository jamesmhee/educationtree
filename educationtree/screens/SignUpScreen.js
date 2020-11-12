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
import { ScrollView } from "react-native-gesture-handler";
const SignInScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.headerContainer}>
        <Text style={styles.Header}>สมัครสมาชิก</Text>
        </View>
          <TextInput
            placeholder="ชื่อจริง"
            placeholderTextColor="#bdbdbd"
            returnKeyType="next"
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="นามสกุล"
            placeholderTextColor="#bdbdbd"
            returnKeyType="next"
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#bdbdbd"
            returnKeyType="next"
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="เบอร์โทรศัพท์"
            placeholderTextColor="#bdbdbd"
            returnKeyType="next"
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="ชื่อผู้ใช้ | Username"
            placeholderTextColor="#bdbdbd"
            returnKeyType="next"
            autoCapitalize="none"
            // onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            style={styles.input}
          />          
          <TextInput
            placeholder="รหัสผ่าน | Password"
            placeholderTextColor="#bdbdbd"
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
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer2}
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          >
            <Text style={styles.buttonText2}>ย้อนกลับ</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>  
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101E3F",
    alignContent:"center", 
    justifyContent:"center", 
    alignItems:"center",
  },
  headerContainer: {
    marginTop:40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom:30,
  },
  input: {
    height: 50,
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 300,
    fontSize: 16,
  },
  Header: {
    color: "white",
    fontSize: 28,
    marginBottom: 10,
    marginTop: 30,
    fontFamily:'kanitLight',
    alignContent:"center", 
    justifyContent:"center", 
    alignItems:"center",
  },
  buttonContainer: {
    backgroundColor: "#ffffff",
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 300,
    marginTop:30,
  },
  buttonContainer2: {
    backgroundColor: "#ff4545",
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 300,
    marginTop:10,
    marginBottom:100,
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonText2: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default SignInScreen;