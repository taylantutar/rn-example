import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  Image
} from 'react-native'
import React, { useState } from 'react'
import { CustomInput, CustomButton } from '../components'

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

        <CustomButton bgColor='tomato' w="50%" h="50" bRadius="16" />

        <CustomButton bgColor='gray' w="30%" h="50" bRadius="16" onPressEvent={NavigateToSignin} />

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
})