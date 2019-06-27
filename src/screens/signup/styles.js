import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    welcomeText: {
      color: 'red',
      fontSize: 20
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    loginButton: {
      backgroundColor: 'red',
      padding: 20,
      borderRadius: 35,
      width: width - 150,
      alignItems: 'center'
    },
    loginText: {
      color: '#ffffff',
      textAlign: 'center'
    },
    input: {
      backgroundColor: 'white',
      padding: 10,
      margin: 10,
      borderRadius: 2,
      fontSize: 12,
      width: width - 50,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5
    },
    passwordInput: {
      backgroundColor: 'white',
      padding: 10,
      margin: 10,
      borderRadius: 2,
      fontSize: 12,
      width: width - 50,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5
    },
    imageBackground: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    }
  })
 
  export default styles