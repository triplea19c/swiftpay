import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class Swipe extends Component {
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 23 }}> Swipe To Pay </Text>
        </View>
      )
    }
  }

export default Swipe