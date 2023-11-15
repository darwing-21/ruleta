import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Juego de la ruleta</Text>
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
      
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Jugar')}>
        <Text style={styles.buttonText}>Jugar</Text>
      </TouchableOpacity> */}
    
      <Image
        source={require('../image/ruleta.png')}
        style={styles.image}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4CEF2',
  },
  headerText: {
    fontSize: 25,
    color: '#7374FA',
    fontWeight: '800',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#9C71D9',
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
    fontSize: 18,
  },
  image: {
    width: 250,
    height: 250,
  },
});

export default HomeScreen;
