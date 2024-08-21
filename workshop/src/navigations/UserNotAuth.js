import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginPage, SignIn } from '../screens';

const Stack = createNativeStackNavigator()

const UserNotAuth = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            {<Stack.Screen name="Login" component={LoginPage} />}
            <Stack.Screen name='Signin' component={SignIn} />
        </Stack.Navigator>
    )
}

export default UserNotAuth
