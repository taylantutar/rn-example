import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from '../screens';

const Stack = createNativeStackNavigator()

const UserAuth = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={HomePage}
                options={{ headerShown: false }}
            />
            {/* { <Stack.Screen name="Signin" component={SignIn} /> } */}
        </Stack.Navigator>
    )
}

export default UserAuth
