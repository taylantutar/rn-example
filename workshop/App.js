import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './src/screens/LoginPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './src/screens/SignIn';

const Stack = createNativeStackNavigator()


const App = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown:false}}
        />
        { <Stack.Screen name="Sigin" component={SignIn} /> }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


