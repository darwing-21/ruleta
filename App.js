import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppStack from './stack';
import {FirebaseAppProvider} from 'reactfire';
import firebase from './firebase-config';

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebase}>
        <AppStack />
    </FirebaseAppProvider>
  );
};
export default App;
