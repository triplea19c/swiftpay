import React, { Component } from "react";
// Import the Library
import Rave from "react-flutterwave-rave";
import { View } from "react-native";

var currency = "GHA";
var country = "GH";

class PayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "FLWPUBK_TEST-8943964f0e3c1090d3f79a9678f6f86c-X", // RavePay PUBLIC KEY
      phone: "+233246460014",
      amount: 2000,
      firstname: "Andy",
      lastname: "Agbetsiafa",
      email: "triplea19c@gmail.com"
    };
    this.callback = this.callback.bind(this);
    this.close = this.close.bind(this);
  }

  callback = response => {
    // this.props.navigation.navigate("Login");
    console.log(response);
  };

  close = () => {
    console.log("Payment closed");
  };

  render() {
    return (
      <View>
        <Rave
          pay_button_text="Pay With Rave"
          class="button"
          payment_method="card"
          customer_email={this.state.email}
          customer_phone={this.state.phone}
          amount={"" + this.state.amount + ""}
          ravePubKey={this.state.key}
          callback={this.callback}
          onclose={this.close}
        />
      </View>
    );
  }
}

export default PayScreen;
