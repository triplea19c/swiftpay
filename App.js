import WelcomeScreen from "./src/screens/welcome";
import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  View
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "./src/screens/login";
import SignupScreen from "./src/screens/signup";
import TransferScreen from "./src/screens/transfer";
import DashboardScreen from "./src/screens/dashboard";
import mtnMomoScreen from "./src/screens/mtnMomo";
import vodafoneCashScreen from "./src/screens/vodafoneCash";
import HomeScreen from "./src/screens/welcome";
import topUpScreen from "./src/screens/top";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Signup: SignupScreen,
    Dashboard: DashboardScreen,
    Transfer: TransferScreen,
    mtnMomo: mtnMomoScreen,
    vodafoneCash: vodafoneCashScreen,
    topUp: topUpScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
