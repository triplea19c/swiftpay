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
import image from "../../../assets/images/vodafone_cash.jpg";
import styles from "./styles";
import validate from "../signup/validate_wrapper";
import firebase from "firebase";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class vodafoneCashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone_number: "",
      amount: "",
      reference: ""
    };
  }

  transfer() {
    const phone_numberError = validate("phone_number", this.state.phone_number);
    const amountError = validate("amount", this.state.amount);
    const referenceError = validate("amount", this.state.reference);

    this.setState({
      phone_numberError: emailError,
      amountError: amountError,
      referenceError: referenceError
    });

    if (!phone_numberError && !passwordError && !referenceError) {
      firebase
        .auth()
        //.signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
          this.props.navigation.navigate("");
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }

  render() {
    let { phone_number } = this.state;
    let { amount } = this.state;
    let { reference } = this.state;

    return (
      <DismissKeyboard>
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
          <Image source={image} style={styles.image} />
          <View>
            <View style={styles.entries}>
              <TextField
                label="Phone Number"
                value={phone_number}
                onChangeText={phone_number => this.setState({ phone_number })}
                onBlur={() => {
                  this.setState({
                    phone_numberError: validate(
                      "phone_number",
                      this.state.phone_number
                    )
                  });
                }}
                error={this.state.phone_numberError}
              />
              <TextField
                label="Amount"
                value={amount}
                onChangeText={value => this.setState({ amount: value.trim() })}
                onBlur={() => {
                  this.setState({
                    amountError: validate("amount", this.state.amount)
                  });
                }}
                error={this.state.amountError}
                secureTextEntry={true}
              />
              <TextField
                label="Reference"
                value={reference}
                onChangeText={value =>
                  this.setState({ reference: value.trim() })
                }
                onBlur={() => {
                  this.setState({
                    referenceError: validate("reference", this.state.reference)
                  });
                }}
                error={this.state.referenceError}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  this.props.navigation.navigate("");
                }}
              >
                <Text style={styles.loginText}>SEND</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    );
  }
}
