import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>JUEGO DE LA RULETA</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Prueba')}>
        <Text style={styles.buttonText}>Simular jugador 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Prueba2')}>
        <Text style={styles.buttonText}>Simular jugador 2</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Comparacion')}>
        <Text style={styles.buttonText}>Comparacion de estrategias</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Jugar')}>
        <Text style={styles.buttonText}>Jugar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0a0a0a',
    alignSelf: 'center',
    paddingVertical: 15,
    marginVertical: 10,
    width: '80%',
    borderRadius: 10,
  },
  buttonText: {
    color: '#f1f1f1',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
