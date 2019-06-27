import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class Top extends Component {
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 23 }}> Top Up </Text>
        </View>
      )
    }
  }

export default Top