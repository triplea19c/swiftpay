import React, {Component} from "react";
import { Text, View, Image, TouchableOpacity, ActivityIndicator, AsyncStorage, StyleSheet } from "react-native";
import image from "../../../assets/images/swiftpaylogo.png";
import styles from "./styles";
// import PayScreen from "../pay";



class HomeScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      authenticated: false
    }
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('token');

      if (value !== null) {
        this.props.navigation.navigate("Dashboard");
      } else {
        console.log(`Error getting token: `);
        this.setState({ isLoading: false, authenticated: false })
      }
     } catch (error) {
       console.log(`Error getting token: ${error}`);
       this.setState({ isLoading: false, authenticated: false })
     }
  }


  render(){
    const {isLoading, authenticated} = this.state

    if(!isLoading) {
      return (
        <View style={styles.container}>
          <Image source={image} />
          <Text style={styles.welcomeText}>Welcome to Convenience</Text>
          <Text style={styles.motto}>SwiftPay - Secure, Instant & Reliable</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Text style={styles.signupText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }else {
      return <View style={acc.loadingScreen}><ActivityIndicator /></View>
    }

  }
};

const acc = StyleSheet.create({
loadingScreen: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
});

export default HomeScreen
