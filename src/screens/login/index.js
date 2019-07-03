import React, { Component } from 'react'
import { TextField } from 'react-native-material-textfield';
import { Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import image from '../../../assets/images/swiftpaylogo.png'
import styles from './styles'
import { createStackNavigator, createAppContainer } from "react-navigation";
import DashboardScreen from '../dashboard'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

class LoginScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: "",
      password: ""
    }
  }

  render() {
    let { user } = this.state;
    let { password } = this.state

   return(
     <DismissKeyboard>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <Image source={image} style={styles.image}>
            </Image>
            <Text style={styles.welcomeText}>
            Please Log in to Continue
            </Text>
            <View>
                <TextField
                  label='username/email'
                  value={user}
                  onChangeText={ (user) => this.setState({ user })}
                />
                <TextField
                  label='Password'
                  value={password}
                  onChangeText={ (password) => this.setState({ password })}
                />
                <View style={styles.button}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => this.props.navigation.navigate('Dashboard')}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.signupText} onPress={() => this.props.navigation.navigate('Signup')}>Don't have an account?</Text>
            </View>
       </KeyboardAvoidingView>
    </DismissKeyboard>
   )
 }
}
 const AppNavigator = createStackNavigator(
    {
      Login: LoginScreen,
      Dashboard: DashboardScreen
    },
    {
        initialRouteName: "Login",
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false
        }
      }
  );

  export default createAppContainer(AppNavigator)
