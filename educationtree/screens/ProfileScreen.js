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
        <Ionicons name="ios-arrow-back" size={40} color="black" style={styles.iconBack}
        onPress={() => {props.navigation.navigate("Firstpage");}}
        />
          <Text style={styles.Header}>จัดการข้อมูลส่วนตัว</Text>
          <Image style={styles.logo} source={require("../images/manage.png")} />
        </View>
        <View
          style={{
            backgroundColor: "white",
            marginTop: 0,
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
        
        <View style={styles.center}>
            <Image style={styles.profile} source={require("../images/Profile.jpg")} />  
            <Text style={styles.infoprofile}>ประวัติส่วนตัว</Text>
        </View>
        <View>
            <Text style={styles.infoprofile2}>รหัสประจำตัว : 61070095</Text>
            <Text style={styles.infoprofile2}>รหัสประจำตัวประชาชน : 1101501021319</Text>
            <Text style={styles.infoprofile2}>คำนำหน้า : นาย</Text>
            <Text style={styles.infoprofile2}>ชื่อจริง : นนททรัพย์</Text>
            <Text style={styles.infoprofile2}>นามสกุล : เซี่ยงฉิน</Text>
            <Text style={styles.infoprofile2}>วัน/เดือน/ปี เกิด : 9 สิงหาคม 2542</Text>
            <Text style={styles.infoprofile2}>สาขาวิชา : เทคโนโลยีสารสนเทศ</Text>
            <Text style={styles.infoprofile2}>รหัสประจำตัวประชาชน : 1101501021319</Text>
            <Text style={styles.infoprofile2}>Email : nontasabsiangchin@hotmail.com</Text>
            <Text style={styles.infoprofile2}>เบอร์ติดต่อ : 084-519-9514</Text>
        </View>
        <View style={styles.button}>
            <Text style={{fontSize:20, color:'white', textAlign:'center'}} onPress={() => {props.navigation.navigate("Firstpage");}}>แก้ไขข้อมูล</Text>
        </View>
          
      
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB200",
  },
  Header: {
    color: "black",
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
    marginLeft:15,
    marginTop: 30,
    paddingLeft: 20,
  },
  headerContainer: {
    marginTop:20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  logo: {
    width: 60,
    height: 60,
    marginTop:20,
    marginVertical: 25,
    marginRight: 10,
  },
  
  details: {
    marginTop:20,
    
    marginLeft:0,
    marginRight:0,
    fontWeight: "bold",

  },
  direct: {
    marginTop:20,
    fontWeight: "bold",
    fontSize: 18,
  },
  center:{
    alignContent:"center", 
    justifyContent:"center", 
    alignItems:"center",
  },
  profile: {
    alignContent:"center", 
    justifyContent:"center", 
    alignItems:"center",
    width: 100,
    height: 100,
    marginBottom:10,
    marginTop: 20,
    borderRadius:50,
  },
  infoprofile: {
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    marginBottom:5,
  },
  infoprofile2: {
    textAlign:'left',
    fontSize:20,
    marginTop:2,
  },
  payment1 :{
    width: 80,
    height: 80,
    margin: 35,
    marginBottom:20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  payment2 :{
    width: 120,
    height: 80,
    margin: 35,
    marginBottom:20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  input: {
    height: 50,
    fontWeight: "bold",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
    paddingHorizontal: 20,
    borderColor: "#191927",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    width: 300,
    fontSize: 16,
  },
  welcome: {
    fontSize: 21,
    textAlign: "center",
    fontWeight: "bold",
    paddingBottom:10,
    
    color: "black",
    
  },
  buttonContainer: {
    backgroundColor: "black",
    paddingVertical: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    width: 300,
    marginBottom:100,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  iconBack: {
    marginTop:30,
    marginLeft:10,
  },
  button:{
    color:'white',
    backgroundColor: "#001389",
    width: '60%',
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop:30,
    marginBottom: 50,
  },     
});
export default SignInScreen;