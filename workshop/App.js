import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './src/screens/LoginPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


