import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Jugar = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>JUEGO DE LA RULETA</Text>

        <Text style={styles.instructions}>
          Este proyecto simula apuestas con dos estrategias específicas. Los parámetros del juego son los siguientes:
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            - Cant. Corridas: Representa la cantidad de simulaciones (por defecto: 100).
          </Text>

          <Text style={styles.infoText}>
            - Cantidad Inicial: Cantidad de efectivo al ingresar al juego (por defecto: 200).
          </Text>

          <Text style={styles.infoText}>
            - Apuesta: Cantidad inicial apostada por el jugador (por defecto: 1).
          </Text>

          <Text style={styles.infoText}>
            - Color: Elección del color para apostar (por defecto: ROJO o NEGRO).
          </Text>
        </View>

        <Text style={styles.instructions}>
          La tabla generada proporciona la siguiente información en cada iteración:
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            - N: Número de iteración.
          </Text>

          <Text style={styles.infoText}>
            - Cant: Cantidad actual de efectivo del jugador.
          </Text>

          <Text style={styles.infoText}>
            - Apuesta: Cantidad actual de la apuesta. Duplicada en caso de pérdida para el jugador 2.
          </Text>

          <Text style={styles.infoText}>
            - Aleatorio: Número generado aleatoriamente.
          </Text>

          <Text style={styles.infoText}>
            - Color: Resultado del color según el número aleatorio.
          </Text>

          <Text style={styles.infoText2}>
            * Si el número está entre 0 y 0.45, el color es ROJO.
          </Text>

          <Text style={styles.infoText2}>
            * Si está entre 0.46 y 0.91, el color es NEGRO.
          </Text>

          <Text style={styles.infoText2}>
            * Si está entre 0.91 y 1, el color es VERDE.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#E4CEF2',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#4B0082', 
  },
  instructions: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333333', 
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#666666', 
    marginBottom: 5,
    marginLeft: 10,
  },
  infoText2: {
    fontSize: 16,
    color: '#666666', 
    marginBottom: 5,
    marginLeft: 20,
  },
});

export default Jugar;

