import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/authFlow/logIn';
import Signup from '../../screens/authFlow/signUp';
import TabNavigator from './TabNavigator';  

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="MainApp" component={TabNavigator} /> 
    </Stack.Navigator>
  );
}
