import React from 'react'
import { Text, View, ImageBackground, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import imageBackground from '../../../assets/images/background.png'
import styles from './styles'

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const Signup = ({ navigation }) => {
   return(
     <DismissKeyboard>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
           <ImageBackground source={imageBackground}
           style={styles.imageBackground}>
             <Text style={styles.welcomeText}>
               Akwaaba
             </Text>
             <TextInput style={styles.input}
             placeholder = "Fullname"
             underlineColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <TextInput style={styles.input}
             placeholder = "Email"
             underColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <TextInput style={styles.input}
             placeholder = "Phone number"
             underColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <TextInput style={styles.passwordInput}
             placeholder = "Password"
             underColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <TextInput style={styles.passwordInput}
             placeholder = "Confirm Password"
             underColorAndroid = "transparent"
             autoCapitalize = "none"
             placeholderTextColor = "gray"
             />
             <View style={styles.buttons}>
               <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Dashboard')}>
                 <Text style={styles.loginText}>SIGN UP</Text>
               </TouchableOpacity>
             </View>
         </ImageBackground>
       </KeyboardAvoidingView>
    </DismissKeyboard>
   )
 }

 export default Signup
