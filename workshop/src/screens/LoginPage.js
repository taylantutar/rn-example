import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  Image
} from 'react-native'
import React, { useState } from 'react'

function LoginButton() {
  console.log("Clicked")
}

export default function LoginPage({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>

      <View style={styles.container}>

        <Image source={require('../../assets/images/login.png')} style={styles.image} />

        <TextInput style={styles.customInput} placeholder='Email..'
          value={email}
          onChangeText={setEmail}></TextInput>

        <TextInput style={styles.customInput} placeholder='Password..'
          value={password}
          onChangeText={setPassword}></TextInput>

        <Pressable style={styles.loginButton} onPress={() => LoginButton()}>
          <Text>Login</Text>
        </Pressable>

        <Pressable style={styles.signInButton} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </Pressable>

      </View>

    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center"
  },
  image: {
    width: '60%',
    height: '30%',
    resizeMode: 'stretch',
    marginBottom:50,
    marginTop:20
  },
  customInput: {
    borderColor: "gray",
    borderRadius: 16,
    borderWidth: 3,
    width: "80%",
    height: 50,
    textAlign: "center",
    marginTop: 10
  },
  loginButton: {
    backgroundColor: "lightblue",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 30
  },
  signInButton: {
    backgroundColor: "blue",
    width: "30%",
    height: 50,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  signInButtonText: {
    color: "white"
  }
})