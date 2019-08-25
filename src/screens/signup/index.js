import React, { Component } from "react";
import { TextField } from "react-native-material-textfield";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
  ActivityIndicator,
  StyleSheet
} from "react-native";
import imageBackground from "../../../assets/images/background.png";
import styles from "./styles";
import validate from "./validate_wrapper";
import validatePassword from "./validate_password";
import { db } from "../../config";
import firebase from "firebase";
import "firebase/firebase-firestore";
import queryString from 'query-string';
// import AsyncStorage from '@react-native-community/async-storage';

const ROOT_URL = "https://ab5626b6.ngrok.io/api/v1/";

const DismissKeyboard = props => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {props.children}
  </TouchableWithoutFeedback>
);

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      fullnameError: "",
      email: "",
      emailError: "",
      phone: "",
      phoneError: "",
      password: "",
      passwordError: "",
      confirmpassword: "",
      confirmpasswordError: "",
      isLoading: false
    };
    //  this.register = this.register.bind(this)
  }

  postRegister = async () => {
    try {
      this.setState({isLoading: true})
      var data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        mobile_number: this.state.phone,
        password: this.state.password,
        c_password: this.state.confirmpassword
      };
      // console.log(data);
      var request = new Request(ROOT_URL + "register", {
        method: "POST",
        headers: new Headers({
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/x-www-form-urlencoded"
        }),
        body: queryString.stringify(data)
      });
      console.log(request);
      const registerRequest = await fetch(request);
      const registerResponse = await registerRequest.json();
      if (registerResponse) {
        console.log(registerResponse);
        // console.log(`token is .......12: ${registerResponse.success.token}`);
        // await AsyncStorage.setItem('token', JSON.stringify{registerResponse.success.token});
        await AsyncStorage.setItem('token', registerResponse.success.token);
        const value = await AsyncStorage.getItem('token');
        if (value && value !== null) {
          console.log(`Success getting token...${value}`);
          this.props.navigation.navigate("Dashboard");
          this.setState({ isLoading: false})
        }
        this.setState({isLoading: false})

      }
    } catch (err) {
      this.setState({isLoading: false})
      console.log("Error fetching data-----------", err);
    }
  };

  render() {
    let { firstname } = this.state;
    let { lastname } = this.state;
    let { email } = this.state;
    let { phone } = this.state;
    let { password } = this.state;
    let { confirmpassword } = this.state;

    const {isLoading} = this.state

    if(!isLoading) {
      return (
        <DismissKeyboard>
          <KeyboardAvoidingView behavior="padding" enabled>
            <ImageBackground
              source={imageBackground}
              style={styles.imageBackground}
            >
              <View style={styles.container}>
                <Text style={styles.welcomeText}>Akwaaba</Text>
                <TextField
                  label="First name"
                  value={firstname}
                  onChangeText={firstname => this.setState({ firstname })}
                  onBlur={() => {
                    this.setState({
                      firstnameError: validate("firstname", this.state.firstname)
                    });
                  }}
                  error={this.state.firstnameError}
                />
                <TextField
                  label="Last name"
                  value={lastname}
                  onChangeText={lastname => this.setState({ lastname })}
                  onBlur={() => {
                    this.setState({
                      lastnameError: validate("lastname", this.state.lastname)
                    });
                  }}
                  error={this.state.lastnameError}
                />
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
                  label="Phone number"
                  value={phone}
                  onChangeText={phone => this.setState({ phone })}
                  onBlur={() => {
                    this.setState({
                      phoneError: validate("phone", this.state.phone)
                    });
                  }}
                  error={this.state.phoneError}
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
                <TextField
                  label="Confirm Password"
                  value={confirmpassword}
                  onChangeText={confirmpassword =>
                    this.setState({ confirmpassword })
                  }
                  onBlur={() => {
                    this.setState({
                      confirmpasswordError: validatePassword(
                        this.state.password,
                        this.state.confirmpassword
                      )
                    });
                  }}
                  error={this.state.confirmpasswordError}
                  secureTextEntry={true}
                />
                <View style={styles.button}>
                  <TouchableOpacity
                    style={styles.signupButton}
                    onPress={this.postRegister}
                  >
                    <Text style={styles.signupText}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={styles.loginText}
                  onPress={() => this.props.navigation.navigate("Login")}
                >
                  Already have an account?
                </Text>
              </View>
            </ImageBackground>
          </KeyboardAvoidingView>
        </DismissKeyboard>
      );
    }else {
      return <View style={acc.loadingScreen}><ActivityIndicator /></View>
    }


  }
}

const acc = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
