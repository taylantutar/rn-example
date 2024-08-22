import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ bgColor, w, h, bRadius, onPressEvent }) => {
    bR = parseFloat(bRadius)
    he = parseInt(h)
    return (
        <Pressable style={[{ backgroundColor: bgColor, width: w, height: he, borderRadius: bR }, styles.signInButton]}
            onPress={onPressEvent}>
            <Text style={styles.signInButtonText}>Sign in</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    signInButton: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
    },
    signInButtonText: {
        color: "white"
    }
})