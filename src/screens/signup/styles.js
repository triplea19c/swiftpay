import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    welcomeText: {
      color: 'red',
      fontSize: 20,
      textAlign: 'center'
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20
    },
    signupButton: {
      backgroundColor: 'red',
      padding: 20,
      borderRadius: 35,
      width: width - 150,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupText: {
      color: '#ffffff',
      textAlign: 'center'
    },
    loginText: {
      textAlign: 'center',
      marginTop: 20
    },
    imageBackground: {
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 50,
      marginBottom: 50
    }
  })
 
  export default styles