import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: width - 150,
      height: height - 325,
    },
    welcomeText: {
      fontSize: 16,
      textAlign: 'center'
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20
    },
    loginButton: {
      backgroundColor: 'red',
      padding: 20,
      borderRadius: 35,
      width: width - 150
    },
    loginText: {
      color: '#ffffff',
      textAlign: 'center'
    },
    signupText: {
      textAlign: 'center',
      marginTop: 20
    }
  })
 
export default styles