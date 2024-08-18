import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  View,
  SafeAreaView
} from 'react-native'
import React, { Component } from 'react'

export default class LoginPage extends Component {
  render() {
    return (
      <SafeAreaView style={styles.AndroidSafeArea}>

        <View>
          <Text>Login Page</Text>
        </View>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})