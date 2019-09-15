import React, { Component } from "react";
import { TextField } from "react-native-material-textfield";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import image from "../../../assets/images/swiftpaylogo.png";
import styles from "./styles";
import validate from "../signup/validate_wrapper";
import queryString from "query-string";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const ROOT_URL = "https://swiftpay-api.herokuapp.com/api/v1/";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: ""
    };
  }

  login = async () => {
    try {
      this.setState({ isLoading: true });
      var data = {
        email: this.state.email,
        password: this.state.password
      };
      // console.log(data);
      var request = new Request(ROOT_URL + "login", {
        method: "POST",
        headers: new Headers({
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/x-www-form-urlencoded"
        }),
        body: queryString.stringify(data)
      });
      console.log(request);
      const loginRequest = await fetch(request);
      const loginResponse = await loginRequest.json();
      if (loginResponse) {
        if (loginRequest.ok !== false) {
          await AsyncStorage.setItem("token", loginResponse.success.token);
          const value = await AsyncStorage.getItem("token");
          if (value && value !== null) {
            console.log(`Success getting token...${value}`);
            this.setState({
              email: "",
              emailError: "",
              password: "",
              passwordError: ""
            });
            this.props.navigation.navigate("Dashboard");
            this.setState({ isLoading: false });
          }
          this.setState({ isLoading: false });
        } else {
          this.setState({ isLoading: false });
        }
        // console.log(`token is .......12: ${registerResponse.success.token}`);
        // await AsyncStorage.setItem('token', JSON.stringify{registerResponse.success.token});
      }
    } catch (err) {
      this.setState({ isLoading: false });
      console.log("Error fetching data-----------", err);
    }
  };

  render() {
    let { email } = this.state;
    let { password } = this.state;
    const { isLoading } = this.state;

    if (!isLoading) {
      return (
        <DismissKeyboard>
          <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            enabled
          >
            <Image source={image} style={styles.image} />
            <Text style={styles.welcomeText}>Please Log in to Continue</Text>
            <View>
              <TextField
                label="Email"
                value={email}
                onChangeText={email => this.setState({ email })}
                onBlur={() => {
                  this.setState({
                    emailError: validate("email", this.state.email)
                  });
                }}
                error={this.state.emailError}
              />
              <TextField
                label="Password"
                value={password}
                onChangeText={value =>
                  this.setState({ password: value.trim() })
                }
                onBlur={() => {
                  this.setState({
                    passwordError: validate("password", this.state.password)
                  });
                }}
                error={this.state.passwordError}
                secureTextEntry={true}
              />
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => {
                    this.login();
                  }}
                >
                  <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={styles.signupText}
                onPress={() => this.props.navigation.navigate("Signup")}
              >
                Don't have an account?
              </Text>
            </View>
          </KeyboardAvoidingView>
        </DismissKeyboard>
      );
    } else {
      return (
        <View style={acc.loadingScreen}>
          <ActivityIndicator />
        </View>
      );
    }
  }
}
const acc = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
