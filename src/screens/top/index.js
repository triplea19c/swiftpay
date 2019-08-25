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
import image from "../../../assets/images/topUpImage.png";
import styles from "./styles";
import validate from "../signup/validate_wrapper";
import { Dropdown } from "react-native-material-dropdown";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default class topUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: ""
    };
  }

  transfer() {
    const amountError = validate("amount", this.state.amount);

    this.setState({
      amountError: amountError
    });
  }

  render() {
    let { amount } = this.state;
    let data = [
      {
        value: "MTN Mobile Money"
      },
      {
        value: "Vodafone Cash"
      },
      {
        value: "AirtelTigo Cash"
      }
    ];

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
              <Dropdown label="Network" data={data} />
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
