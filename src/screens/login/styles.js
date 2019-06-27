import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: width - 150,
      height: height - 525,
    },
    welcomeText: {
      fontSize: 16,
      textAlign: 'center'
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
    innerContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    usernameInput: {
      backgroundColor: 'white',
      borderRadius: 2,
      fontSize: 12,
      width: width - 50,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginTop: 10,
      marginBottom: 10
    },
    passwordInput: {
      backgroundColor: 'white',
      borderRadius: 2,
      fontSize: 12,
      width: width - 50,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginTop: 10,
      marginBottom: 10
    }
  })
 
export default styles