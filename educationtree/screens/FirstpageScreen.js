import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Icon,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const LoginScreen = (props) => {
    return (
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View
            style={styles.logoContainer}
          >
            <Image style={{width:100, height:100, marginTop:25,}} source={require("../images/logoapp.png")} />
            <Text style={{fontSize:17, color:'black', textAlign:'center', fontWeight:'bold'}}>ระบบเก็บข้อมูลนักศึกษาคณะเทคโนโลยีสารสนเทศ</Text>
            <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'black',
                    width: 300,
                    marginTop: 20,
                  }}
                />
            <TouchableOpacity
            onPress={() => {props.navigation.navigate("Rent");}}
            >                      
            <Image style={{width:100, height:100, marginTop:10, borderRadius:50}} source={require("../images/Profile.jpg")} />
            </TouchableOpacity>  
            <Text style={{fontSize:20, color:'black', textAlign:'center'}}>นาย นนททรัพย์ เซี่ยงฉิน</Text>
            <Text style={{fontSize:15, color:'black', textAlign:'center'}}>รหัสนักศึกษา : 61070095</Text>
            <View style={styles.buttonMenu}>
              <Text style={{fontSize:20, color:'white', textAlign:'center'}} onPress={() => {props.navigation.navigate("Profile");}}>จัดการข้อมูลส่วนตัว</Text>
            </View>
            <View style={styles.buttonMenu2}>               
              <Text style={{fontSize:20, color:'white', textAlign:'center'}} onPress={() => {props.navigation.navigate("Class");}}>จัดการข้อมูลการเรียน</Text>
            </View>              
            <View style={styles.buttonMenu3}>   
              <Text style={{fontSize:20, color:'white', textAlign:'center'}} onPress={() => {props.navigation.navigate("Schedule");}}>ตารางเรียน</Text>
            </View>              
            <View style={styles.buttonMenu2}>   
              <Text style={{fontSize:20, color:'white', textAlign:'center'}} onPress={() => {props.navigation.navigate("Viewclass");}}>ดูหลักสูตรรายวิชา | รีวิวรายวิชา</Text>
            </View>
            <View style={styles.buttonMenu4}>   
              <Text style={{fontSize:20, color:'white', textAlign:'center'}} onPress={() => {props.navigation.navigate("Login");}}>ออกจากระบบ</Text>
            </View>                  
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  buttonMenu:{
    color:'white',
    backgroundColor: "#001389",
    width: '100%',
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop:20,
  },
  buttonMenu2:{
    color:'white',
    backgroundColor: "#FF8300",
    width: '100%',
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonMenu3:{
    color:'white',
    backgroundColor: "#001389",
    width: '100%',
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  }, 
  buttonMenu4:{
    color:'white',
    backgroundColor: "#001389",
    width: '60%',
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop:25,
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
    marginTop: 80,
  },
});
export default LoginScreen;