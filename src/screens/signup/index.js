import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import imageBackground from '../../../assets/images/background.png'
import styles from './styles'
import validate from './validate_wrapper'
import validatePassword from "./validate_password"

const DismissKeyboard = (props) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {props.children}
  </TouchableWithoutFeedback>
)

export default class SignupScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      fullname: "",
      fullnameError: "",
      email: "",
      emailError: '',
      phone: "",
      phoneError: "",
      password: "",
      passwordError: "",
      confirmpassword: "",
      confirmpasswordError: ""
    }
  //  this.register = this.register.bind(this)
  }

  register=()=> {
    const fullnameError = validate('fullname', this.state.fullname)
    const emailError = validate('email', this.state.email)
    const phoneError = validate('phone', this.state.phone)
    const passwordError = validate('password', this.state.password)
    const confirmpasswordError = validatePassword(this.state.password, this.state.confirmpassword)
    this.setState({
      fullnameError: fullnameError,
      emailError: emailError,
      phoneError: phoneError,
      passwordError: passwordError,
      confirmpasswordError: confirmpasswordError
    })

    if (!fullnameError && !emailError && !phoneError && !passwordError && !confirmpasswordError) {
      this.props.navigation.navigate("Dashboard")
    }
  }

  render() {
    let { fullname } = this.state;
    let { email } = this.state;
    let { phone } = this.state;
    let { password } = this.state;
    let { confirmpassword } = this.state;

    return (
      <DismissKeyboard>
         <KeyboardAvoidingView behavior="padding" enabled>
            <ImageBackground source={imageBackground}
            style={styles.imageBackground}>
              <View style={styles.container}>
                <Text style={styles.welcomeText}>
                  Akwaaba
                </Text>
                <TextField
                  label='Fullname'
                  value={fullname}
                  onChangeText={ (fullname) => this.setState({ fullname })}
                  onBlur={() => {
                    this.setState({
                      fullnameError: validate('fullname', this.state.fullname)
                    })
                  }}
                  error={this.state.fullnameError}
                />
                <TextField
                  label='Email'
                  value={email}
                  onChangeText={ (email) => this.setState({ email })}
                  onBlur={() => {
                    this.setState({
                      emailError: validate('email', this.state.email)
                    })
                  }}
                  error={this.state.emailError}
                />
                <TextField
                  label='Phone number'
                  value={phone}
                  onChangeText={ (phone) => this.setState({ phone })}
                  onBlur={() => {
                    this.setState({
                      phoneError: validate('phone', this.state.phone)
                    })
                  }}
                  error={this.state.phoneError}
                />
                <TextField
                  label='Password'
                  value={password}
                  onChangeText={value => this.setState({password: value.trim()})}
                  onBlur={() => {
                    this.setState({
                      passwordError: validate('password', this.state.password)
                    })
                  }}
                  error={this.state.passwordError}
                  secureTextEntry={true}
                />
                <TextField
                  label='Confirm Password'
                  value={confirmpassword}
                  onChangeText={ (confirmpassword) => this.setState({ confirmpassword })}
                  onBlur={() => {
                    this.setState({
                      confirmpasswordError: validatePassword(this.state.password, this.state.confirmpassword)
                    })
                  }}
                  error={this.state.confirmpasswordError}
                  secureTextEntry={true}
                />
                <View style={styles.button}>
                  <TouchableOpacity style={styles.signupButton} onPress={this.register}>
                    <Text style={styles.signupText}>SIGN UP</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.loginText} onPress={() => this.props.navigation.navigate('Login')}>Already have an account?</Text>
              </View>
          </ImageBackground>
        </KeyboardAvoidingView>
     </DismissKeyboard>
    );
  }
}