import React, { Component } from 'react';
import { TextField } from 'react-native-material-textfield';
import { Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import imageBackground from '../../../assets/images/background.png'
import styles from './styles'
import validate from './validate_wrapper'
import validation from 'validation'

const DismissKeyboard = (props) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {props.children}
  </TouchableWithoutFeedback>
)

export default class SignupScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      emailError: '',
      phone: "",
      password: "",
      passwordError: '',
      confirmpassword: "",
      fullname: ""
    }
  }

  register() {
    const emailError = validate('email', this.state.email)
    const passwordError = validate('password', this.state.password)

    this.setState({
      emailError: emailError,
      passwordError: passwordError
    })

    if (!emailError && !passwordError) {
      alert('Details are valid!')
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
                />
                <TextField
                  label='Email'
                  value={email}
                  onChangeText={ (email) => this.setState({ email })}
                />
                <TextField
                  label='Phone number'
                  value={phone}
                  onChangeText={ (phone) => this.setState({ phone })}
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
                />
                <View style={styles.button}>
                  <TouchableOpacity style={styles.signupButton} onPress={this.validateRegister}>
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
