import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const CustomInput = ({ val, changeTextEvent, pHolder, secureText }) => {
    return (
        <TextInput style={styles.customInput} placeholder={pHolder}
            value={val}
            onChangeText={changeTextEvent} secureTextEntry={secureText}></TextInput>
    )
}

export default CustomInput

const styles = StyleSheet.create({

    customInput: {
        borderColor: "gray",
        borderRadius: 16,
        borderWidth: 3,
        width: "80%",
        height: 50,
        textAlign: "center",
        marginTop: 10
    },
})