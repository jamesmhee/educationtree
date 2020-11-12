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
  Button,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
const LoginScreen = (props) => {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View
            style={styles.logoContainer}
          >
            <Image style={{width:100, height:100, marginTop:25,}} source={require("../images/logoapp.png")} />
            <Text style={{fontSize:18, color:'black', textAlign:'center', fontWeight:'bold', fontFamily:'kanitBold'}}>ระบบเก็บข้อมูลนักศึกษาคณะเทคโนโลยีสารสนเทศ</Text>
            <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: 'black',
                    width: 300,
                    marginTop: 20,
                  }}
                />
            <TouchableOpacity
            onPress={() => {props.navigation.navigate("Profile");}}
            >                      
            <Image style={{width:100, height:100, marginTop:10, borderRadius:50}} source={require("../images/Profile.jpg")} />
            </TouchableOpacity>  
            <Text style={{fontSize:20, color:'black', textAlign:'center', fontFamily:'kanitLight'}}>นาย นนททรัพย์ เซี่ยงฉิน</Text>
            <Text style={{fontSize:15, color:'black', textAlign:'center', fontFamily:'kanitLight'}}>รหัสนักศึกษา : 61070095</Text>
            <View style={styles.title}>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Profile");}}>
                  <Ionicons name="ios-person" size={35} color="black" onPress={() => {props.navigation.navigate("Profile");}}/>
                  <Text style={{fontSize:18, color:'black', textAlign:'center', fontFamily:'kanitLight'}} onPress={() => {props.navigation.navigate("Profile");}} >จัดการข้อมูลส่วนตัว</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Class");}}>
                  <Ionicons name="ios-school" size={35} color="black" onPress={() => {props.navigation.navigate("Class");}}/>
                  <Text style={{fontSize:18, color:'black', textAlign:'center', fontFamily:'kanitLight'}} onPress={() => {props.navigation.navigate("Class");}} >จัดการข้อมูลการเรียน</Text>
                </TouchableOpacity>
              </View> 
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Schedule");}}>
                  <Ionicons name="ios-calendar" size={35} color="black" onPress={() => {props.navigation.navigate("Schedule");}}/>
                  <Text style={{fontSize:18, color:'black', textAlign:'center', fontFamily:'kanitLight'}} onPress={() => {props.navigation.navigate("Schedule");}} >ดูตารางเรียน</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {props.navigation.navigate("Viewclass");}}>
                  <Ionicons name="ios-search" size={35} color="black" onPress={() => {props.navigation.navigate("Viewclass");}}/>
                  <Text style={{fontSize:18, color:'black', textAlign:'center', fontFamily:'kanitLight'}} onPress={() => {props.navigation.navigate("Viewclass");}} >ดูหลักสูตรรายวิชา</Text>
                </TouchableOpacity>
              </View> 
            </View>                 
                <TouchableOpacity style={styles.button2} onPress={() => {props.navigation.navigate("Login");}}>
                  <Ionicons name="ios-log-out" size={35} color="white" onPress={() => {props.navigation.navigate("Login");}}/>
                  <Text style={{fontSize:15, color:'white', textAlign:'center', fontFamily:'kanitLight'}} onPress={() => {props.navigation.navigate("Login");}}>ออกจากระบบ</Text>
                </TouchableOpacity>            
            </View>               
        </View>
      </ScrollView>
    );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#ff8000",
    padding:10,
    marginLeft:5,
    marginRight:5,
    borderRadius: 10,
    width:'47%',
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#001389",
    padding:10,
    marginTop:35,
    marginBottom:50,
    borderRadius: 10,
    width:'50%',
    height: 80,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    height:'100%',
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
  buttonRow:{
    marginTop:20,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  buttonMenu:{
    color:'white',
    backgroundColor: "#ff8000",
    width: '100%',
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop:20,
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
});
export default LoginScreen;