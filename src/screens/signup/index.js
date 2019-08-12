import React, { Component } from "react";
import { TextField } from "react-native-material-textfield";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import imageBackground from "../../../assets/images/background.png";
import styles from "./styles";
import validate from "./validate_wrapper";
import validatePassword from "./validate_password";
import { db } from "../../config";
import firebase from "firebase";
import "firebase/firebase-firestore";

let addUser = user => {
  db.ref("/users").push(user);
};

const DismissKeyboard = props => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {props.children}
  </TouchableWithoutFeedback>
);

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      fullnameError: "",
      email: "",
      emailError: "",
      phone: "",
      phoneError: "",
      password: "",
      passwordError: "",
      confirmpassword: "",
      confirmpasswordError: ""
    };
    //  this.register = this.register.bind(this)
  }

  register = () => {
    const fullnameError = validate("fullname", this.state.fullname);
    const emailError = validate("email", this.state.email);
    const phoneError = validate("phone", this.state.phone);
    const passwordError = validate("password", this.state.password);
    const confirmpasswordError = validatePassword(
      this.state.password,
      this.state.confirmpassword
    );
    this.setState({
      fullnameError: fullnameError,
      emailError: emailError,
      phoneError: phoneError,
      passwordError: passwordError,
      confirmpasswordError: confirmpasswordError
    });

    if (
      !fullnameError &&
      !emailError &&
      !phoneError &&
      !passwordError &&
      !confirmpasswordError
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(user => {
          return firebase
            .firestore()
            .collection("Users")
            .doc(user.user.uid)
            .set({});
        })
        .then(() => {
          this.props.navigation.navigate("Dashboard");
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
    }
  };

  handleSubmit = () => {
    let user = {
      fullname: this.state.fullname,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword
    };
    console.log(user);
    addUser(user);
    alert("User details successfully saved");
  };

  render() {
    let { fullname } = this.state;
    let { email } = this.state;
    let { phone } = this.state;
    let { password } = this.state;
    let { confirmpassword } = this.state;

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
                label="Fullname"
                value={fullname}
                onChangeText={fullname => this.setState({ fullname })}
                onBlur={() => {
                  this.setState({
                    fullnameError: validate("fullname", this.state.fullname)
                  });
                }}
                error={this.state.fullnameError}
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
                  onPress={this.register}
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
  }
}
