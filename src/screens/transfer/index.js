import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class Transfer extends Component {
    render() {
      return (
        <View style={styles.MainContainer}>
          <Text style={{ fontSize: 23 }}> Transfer </Text>
        </View>
      )
    }
  }

export default Transfer