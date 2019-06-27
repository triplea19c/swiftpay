import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class Services extends Component {
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 23 }}> Services </Text>
        </View>
      )
    }
  }

export default Services