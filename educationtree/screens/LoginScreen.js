import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const LoginScreen = (props) => {
    return (
      <ScrollView>
      <View style={styles.font}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View
            style={styles.logoContainer}
          >
            <Image style={{width:150, height:150, marginTop:60}} source={require("../images/logoapp.png")} />
          </View>
          <View
            style={styles.buttonContainer}
          >
                <Text style={{color: "white", fontWeight: "bold", fontSize: 20, textAlign:"center", marginTop:50, fontFamily:'kanitLight'}}>Username / รหัสนักศึกษา</Text>
                <TextInput
                  style={styles.Textinput} placeholder="ใส่รหัสนักศึกษาหรือชื่อผู้ใช้งาน"
                />
                <Text style={{color: "white", fontWeight: "bold", fontSize: 20, textAlign:"center", marginTop:10, fontFamily:'kanitLight'}}>Password / รหัสผ่าน</Text>
                <TextInput
                  secureTextEntry={true} style={styles.Textinput} placeholder="ใส่รหัสผ่าน"
                />                           
              <View
                style={
                  styles.buttonSignIn
                }
              >            
                <TouchableOpacity
                onPress={() => {props.navigation.navigate("Firstpage");}}
                >
                <Text
                  style={{ color: "black", fontWeight: "bold", fontSize: 20, width:300, textAlign:"center", fontFamily:'kanitLight'}}
                >
                  เข้าสู่ระบบ
                </Text>
                </TouchableOpacity>
              </View>
              <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'white',
                    width: 300,
                    marginTop: 30,
                  }}
                />
              <Text
              onPress={() => {props.navigation.navigate("SignUp");}}
                  style={{ color: "white", fontSize: 20, width:300, textAlign:"center", marginTop: 10, fontFamily:'kanitLight'}}
                >
                  สมัครสมาชิก
                </Text>
              <View
                style={
                  styles.buttonSignIn}
              >              
              </View>     
          </View>
        </KeyboardAvoidingView>
      </View>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101E3F",
  },
  logoContainer: {
    alignContent:"center", 
    justifyContent:"center", 
    alignItems:"center",
  },
  buttonContainer: {
    alignContent:"center", 
    justifyContent:"center", 
    alignItems:"center",
  },
  // formContainer:{
  //     marginBottom: 30
  // },
  // footer:{
  //     backgroundColor: "#fff",
  //     borderTopLeftRadius: 35,
  //     borderTopRightRadius: 35,
  //     paddingVertical: 50,
  //     paddingHorizontal: 30
  // },
  Textinput: {
    backgroundColor: "#ffffff",
    height: 35,
    width: 300,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSignIn: {
    backgroundColor: "#ffffff",
    height: 70,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  font:{
    fontFamily:'kanitLight',
  },
});
export default LoginScreen;