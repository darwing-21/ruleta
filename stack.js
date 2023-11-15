import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './stackRoutes';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HomeScreen"
          component={Routes.HomeScreen}
          options={{
            title: 'Inicio',
            headerTitleStyle: {
              fontSize: 20,
              color: '#ffffff',
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#8B65BF',
            },
          }}
        />

        <Stack.Screen
          name="Prueba"
          component={Routes.Prueba}
          options={{
            title: 'Simulador de jugador 1',
            headerTitleStyle: {
              fontSize: 20,
              color: '#ffffff',
              fontWeight: 'bold',
              
            },
            headerStyle: {
              backgroundColor: '#8B65BF',
            },
          }}
        />
        <Stack.Screen
          name="Prueba2"
          component={Routes.Prueba2}
          options={{
            title: 'Simulador de jugador 2',
            headerTitleStyle: {
              fontSize: 20,
              color: '#ffffff',
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#8B65BF',
            },
          }}
        />
        <Stack.Screen
          name="Comparacion"
          component={Routes.Comparacion}
          options={{
            title: 'Simular la comparacion',
            headerTitleStyle: {
              fontSize: 20,
              color: '#ffffff',
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#8B65BF',
            },
          }}
        />
        <Stack.Screen
          name="Jugar"
          component={Routes.Jugar}
          options={{
            title: 'Jugar',
            headerTitleStyle: {
              fontSize: 20,
              color: '#ffffff',
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#8B65BF',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
