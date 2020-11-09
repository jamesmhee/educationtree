import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from "../screens/LoginScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import FirstpageScreen from "../screens/FirstpageScreen";
import ClassScreen from "../screens/ClassScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import ViewclassScreen from "../screens/ViewclassScreen";
import ProfileScreen from "../screens/ProfileScreen";
const PagesNavigator = createStackNavigator({
  Login: {
    screen:LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: {
    screen:SignInScreen,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen:SignUpScreen,
    navigationOptions: {
      header: null,
    },
  },
  Firstpage: {
    screen:FirstpageScreen,
    navigationOptions: {
      header: null,
    },
  },
  Profile: {
    screen:ProfileScreen,
    navigationOptions: {
      header: null,
    },
  },
  Class: {
    screen:ClassScreen,
    navigationOptions: {
      header: null,
    },
  },
  Schedule: {
    screen:ScheduleScreen,
    navigationOptions: {
      header: null,
    },
  },
  Viewclass: {
    screen:ViewclassScreen,
    navigationOptions: {
      header: null,
    },
  },
  
});

export default createAppContainer(PagesNavigator);
