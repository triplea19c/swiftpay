import React, { Component } from "react";
import {
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";

class Logout extends Component {
  constructor(props) {
    super(props);
    AsyncStorage.clear();
    this.state = { isLoading: true };
    console.log(this.props.navigation);
  }

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const asyncStorageKeys = await AsyncStorage.getAllKeys();
      if (asyncStorageKeys.length > 0) {
        AsyncStorage.clear();
      }
    } catch (error) {
      console.log(`Error getting token: ${error}`);
      this.setState({ isLoading: false });
    }
    this.setState({ isLoading: false });
    this.props.navigation.navigate("LoginScreen");
  }
  logout = () => {
    console.log("logging out");
    this.props.navigation.navigate("Login");
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={acc.loadingScreen}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <View style={acc.loadingScreen}>
          <View style={acc.button}>
            <TouchableOpacity
              style={acc.loginButton}
              onPress={() => {
                this.logout();
              }}
            >
              <Text style={acc.loginText}>CLICK HERE TO LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }
}
const { width, height } = Dimensions.get("screen");
const acc = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20
  },
  loginButton: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 35,
    width: width - 150
  },
  loginText: {
    color: "#ffffff",
    textAlign: "center"
  }
});

export default Logout;
