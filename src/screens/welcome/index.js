import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import image from '../../../assets/images/swiftpaylogo.png'
import { createStackNavigator, createAppContainer } from "react-navigation";
import styles from './styles'
import LoginScreen from '../login'
import SignupScreen from '../signup'

const HomeScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Image source={image}>
            </Image>
            <Text style={styles.welcomeText}>
              Welcome to Convenience
            </Text>
            <Text style={styles.motto}>
              SwiftPay - Secure, Instant & Reliable
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginText}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signupText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Signup: SignupScreen
  },
{
  initialRouteName: "Home",
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
}
);

export default createAppContainer(AppNavigator)
