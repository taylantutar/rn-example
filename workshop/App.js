import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigation from './src/navigations/RootNavigation';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <RootNavigation />
  );
}

export default App;


