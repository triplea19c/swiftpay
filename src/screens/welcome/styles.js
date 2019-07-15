import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    welcomeText: {
      fontSize: 24,
      marginBottom: 20
    },
    motto: {
      color: 'grey'
    },
    buttonContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    loginButton: {
      backgroundColor: 'red',
      marginRight: 10,
      padding: 20,
      borderRadius: 35,
      width: width - 250,
      justifyContent: 'center',
      alignItems: 'center'
    },
    signupButton: {
      backgroundColor: '#D99147',
      padding: 20,
      borderRadius: 35,
      width: width - 250,
      marginLeft: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    loginText: {
      color: '#ffffff'
    },
    signupText: {
      color: '#ffffff'
    }
  })

  export default styles
  