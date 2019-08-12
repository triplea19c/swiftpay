import React, { Component } from "react";
import { TextField } from "react-native-material-textfield";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import image from "../../../assets/images/swiftpaylogo.png";
import styles from "./styles";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DashboardScreen from "../dashboard";
import validate from "../signup/validate_wrapper";
import firebase from "firebase";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      password: "",
      passwordError: ""
    };
  }

  login() {
    const emailError = validate("email", this.state.email);
    const passwordError = validate("password", this.state.password);

    this.setState({
      emailError: emailError,
      passwordError: passwordError
    });

    if (!emailError && !passwordError) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.props.navigation.navigate("Dashboard");
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }

  render() {
    let { email } = this.state;
    let { password } = this.state;

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
              onChangeText={value => this.setState({ password: value.trim() })}
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
  }
}
const AppNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Dashboard: DashboardScreen
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
