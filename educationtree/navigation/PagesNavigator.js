import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import LoginScreen from "../screens/LoginScreen";
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
      headerShown: false,
    },
  },
  SignUp: {
    screen:SignUpScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Firstpage: {
    screen:FirstpageScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Profile: {
    screen:ProfileScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Class: {
    screen:ClassScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Schedule: {
    screen:ScheduleScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Viewclass: {
    screen:ViewclassScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  
});

export default createAppContainer(PagesNavigator);
