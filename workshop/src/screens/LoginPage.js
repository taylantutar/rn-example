import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Pressable
} from 'react-native'
import React,{ useState } from 'react'

function LoginButton(){
  console.log("Clicked")
}

export default function LoginPage() {

  const [email, setEmail] = useState("");
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>

      <View style={styles.container}>
        <Text>Hello: {email}</Text>
        <TextInput style={styles.customInput} placeholder='Lütfen adinizi giriniz..'
          value={email}
          onChangeText={setEmail}></TextInput>

        <Pressable style={styles.saveButton} onPress={() => LoginButton()}>
          <Text>Kaydet</Text>
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
    justifyContent: "center",
    alignItems: "center"
  },
  customInput: {
    borderColor: "gray",
    borderRadius: 16,
    borderWidth: 3,
    width: "80%",
    height: 40,
    textAlign: "center",
    marginTop: 10
  },
  saveButton: {
    backgroundColor: "lightblue",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 10
  }
})