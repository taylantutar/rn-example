import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { CustomInput, CustomButton } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setEmail, setPassword } from "../redux/userSlice";

export default function LoginPage({ navigation }) {
  const { email, password } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  
  function NavigateToSignin() {
    navigation.navigate("Signin");
  }

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <Image
          source={require("../../assets/images/login.png")}
          style={styles.image}
        />

        <CustomInput
          val={email}
          changeTextEvent={(val) => dispatch(setEmail(val))}
          pHolder="Email.."
          secureText={false}
        ></CustomInput>

        <CustomInput
          val={password}
          changeTextEvent={(val) => dispatch(setPassword(val))}
          pHolder="Password.."
          secureText={true}
        ></CustomInput>

        <CustomButton bgColor="tomato" w="50%" h="50" bRadius="16" />

        <CustomButton
          bgColor="gray"
          w="30%"
          h="50"
          bRadius="16"
          onPressEvent={NavigateToSignin}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    justifyContent: "top",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: "30%",
    resizeMode: "stretch",
    marginBottom: 50,
    marginTop: 20,
  },
});
