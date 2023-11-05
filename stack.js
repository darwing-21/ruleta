import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './stackRoutes';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Prueba" component={Routes.Prueba} />
        <Stack.Screen name="Prueba2" component={Routes.Prueba2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
