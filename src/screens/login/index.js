import React from 'react'
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

const LoginScreen = ({ navigation }) => {
   return(
     <DismissKeyboard>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
            <Image source={image} style={styles.image}>
            </Image>
            <Text style={styles.welcomeText}>
            Please Log in to Continue
            </Text>
            <View style={styles.innerContainer}>
                <TextInput style={styles.usernameInput}
                placeholder = "Username/Email"
                underlineColorAndroid = "transparent"
                autoCapitalize = "none"
                placeholderTextColor = "gray"
                />
                <TextInput style={styles.passwordInput}
                placeholder = "Password"
                underColorAndroid = "transparent"
                autoCapitalize = "none"
                placeholderTextColor = "gray"
                />
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Dashboard')}>
                        <Text style={styles.loginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
       </KeyboardAvoidingView>
    </DismissKeyboard>
   )
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
