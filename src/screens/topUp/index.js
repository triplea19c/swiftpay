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
import image from "../../../assets/images/topUpImage.png";
import styles from "./styles";
import validate from "../signup/validate_wrapper";
import { Dropdown } from "react-native-material-dropdown";

import queryString from "query-string";

const ROOT_URL = "https://swiftpay-api.herokuapp.com/api/v1/";

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

  transfer = async () => {
    // const amountError = validate("amount", this.state.amount);
    //
    // this.setState({
    //   amountError: amountError
    // });
    try {
      this.setState({ isLoading: true });
      const token = await AsyncStorage.getItem("token");

      if (token !== null) {
        var data = {
          is_mobile_money_gh: 1,
          amount: this.state.amount,
          network: this.state.network
        };
        var request = new Request(ROOT_URL + "load/wallet", {
          method: "POST",
          headers: new Headers({
            "X-Requested-With": "XMLHttpRequest",
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }),
          body: queryString.stringify(data)
        });

        const detailsRequest = await fetch(request);
        const detailsResponse = await detailsRequest.json();
        console.log(detailsResponse);
        this.setState({ isLoading: false, amount: "" });
      } else {
        console.log(`Error getting token: `);
        this.setState({ isLoading: false, authenticated: false });
      }
    } catch (err) {
      this.setState({ isLoading: false });
      console.log("Error fetching data-----------", err);
    }
  };

  onChangeText(data) {
    if (data == "MTN Mobile Money") {
      this.setState({ network: "MTN" });
    } else if (data == "Vodafone Cash") {
      this.setState({ network: "VODAFONE" });
    } else {
      this.setState({ network: "TIGO" });
    }
  }

  render() {
    let { amount } = this.state;

    const data = [
      {
        value: "MTN Mobile Money",
        code: "MTN"
      },
      {
        value: "Vodafone Cash",
        code: "VODAFONE"
      },
      {
        value: "AirtelTigo Cash",
        code: "TIGO"
      }
    ];

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
            <View>
              <View style={styles.entries}>
                <TextField
                  label="Amount"
                  value={amount}
                  onChangeText={value =>
                    this.setState({ amount: value.trim() })
                  }
                  onBlur={() => {
                    this.setState({
                      amountError: validate("amount", this.state.amount)
                    });
                  }}
                  error={this.state.amountError}
                />
                <Dropdown
                  label="Network"
                  data={data}
                  onChangeText={value => this.onChangeText(value)}
                />
              </View>
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={this.transfer}
                >
                  <Text style={styles.loginText}>SEND</Text>
                </TouchableOpacity>
              </View>
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
