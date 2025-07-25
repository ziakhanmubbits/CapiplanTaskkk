import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/components/navigation/AuthStack';

export default function App() {
  console.log('ajakkakakk')
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
