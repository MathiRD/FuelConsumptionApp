import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Result from './src/screens/Result';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3c474b',
          },
          headerTintColor: '#c0e0de',
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Início' }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ title: 'Resultado' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}