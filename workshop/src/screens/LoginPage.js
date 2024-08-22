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
import { CustomInput } from '../components'

export default function LoginPage({ navigation }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function Login() {
    consolo.log("Login")
  }

  function NavigateToSignin() {
    navigation.navigate('Signin');
  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>

      <View style={styles.container}>

        <Image source={require('../../assets/images/login.png')} style={styles.image} />

        <CustomInput val={email} changeTextEvent={setEmail} pHolder='Email..' secureText={false}></CustomInput>

        <CustomInput val={password} changeTextEvent={setPassword} pHolder='Password..' secureText={true}></CustomInput>

        <Pressable style={styles.loginButton} onPress={() => Login()}>
          <Text>Login</Text>
        </Pressable>

        <Pressable style={styles.signInButton} onPress={NavigateToSignin}>
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
    marginBottom: 50,
    marginTop: 20
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 25,
  },
  signInButtonText: {
    color: "white"
  }
})