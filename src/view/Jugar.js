import Reac, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
const Jugar = ({navigation}) => {
  
  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.header}>JUEGO DE LA RULETA</Text>
          <Text style={styles.instructions}>Problema</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.text}>
              En el juego de la ruleta existen muchas opciones para apostar. Una
              de ellas consiste en apostarle al color rojo o al color negro. En
              el tablero de la ruleta existen 10 números rojos, 10 números
              negros y 2 números verdes (cero y doble cero).{'\n\n'} Si un
              jugador apuesta a un color y el color aparece, él o ella gana la
              cantidad apostada. Si se muestra un color diferente, el jugador
              pierde el importe de la apuesta. Si aparece verde, gire la rueda
              nuevamente hasta que aparezca rojo o negro. Si este color es el
              color de la apuesta, el jugador no gana ni pierde. De lo
              contrario, se perderá el importe de la apuesta. {'\n\n'}Dos
              jugadores usan diferentes estrategias. Un jugador simplemente
              apuesta Bs. 1.‐ al color rojo cada vez. El otro jugador empieza
              apostando un Bs. 1.‐ al color rojo. Si la gana, la apuesta otro
              Bs.1. Sin embargo, si el pierde, el apuesta Bs. 2.‐ la próxima
              vez. Si el pierde otra vez, la apuesta Bs. 4.‐ Este jugador puede
              continuar doblando la apuesta hasta un límite de Bs. 500.‐ Si el
              pierde esta apuesta de Bs. 500.‐ el empieza apostando nuevamente.{' '}
              {'\n\n'}Si cada jugador inicia el juego con Bs. 200.‐, ¿Sobre la
              base de los resultados que arroja el sistema de simulación reporte
              por sistema la estrategia más adecuada? Por supuesto, que se deben
              visualizar los resultados de simulación de las diferentes
              estrategias a configurar en el sistema de simulación.
            </Text>
            <Text style={styles.text}>
              A continuación se muestra las condiciones y el funcionamiento de
              la simulación.
            </Text>
          </View>
          <Text style={styles.instructions}>Variables de entrada</Text>

          <View style={styles.infoContainer}>
            <Image
              source={require('../image/form1.png')}
              style={styles.image}
              resizeMode="contain"></Image>
            <Text style={styles.text1}>
              <Text style={styles.boldText}>- Cant.corridas:</Text> Indica el
              número de iteraciones que se realizarán.
              {'\n'}
              <Text style={styles.boldText}> - Cantidad Inicial:</Text> Indica
              la cantidad inicial con la que se ingresa al juego.{'\n'}
              <Text style={styles.boldText}>- Apuesta:</Text> Se refiere a la
              cantidad apostada inicialmente.{'\n'}
              <Text style={styles.boldText}>- Color:</Text> Se refiere al color
              al que se va a apostar.{'\n'}
            </Text>
          </View>
          <Text style={styles.instructions}>Resultados en la tabla</Text>
          <View style={styles.infoContainer}>
            <Image
              source={require('../image/Tabla.png')}
              style={styles.image}
              resizeMode="contain"></Image>
            <Text style={styles.text1}>
              <Text style={styles.boldText}>- N:</Text> Indica el número de la
              iteración actual.
              {'\n'}
              <Text style={styles.boldText}>- Cant:</Text> Representa la
              cantidad actual disponible para apostar.{'\n'}
              <Text style={styles.boldText}>- Apuesta:</Text> Refleja la
              cantidad actual de la apuesta.{'\n'}
              <Text style={styles.boldText}>- Aleatorio:</Text> Muestra el
              número aleatorio resultante.{'\n'}
              <Text style={styles.boldText}>- Color:</Text> Indica el color
              asociado al número aleatorio, el cual se compara con el color
              seleccionado para apostar.{'\n'}
            </Text>
          </View>
          <Text style={styles.instructions}>Como se obtiene el color</Text>
          <View style={styles.infoContainer}>
            <Image
              source={require('../image/probalilidad.png')}
              style={styles.image}
              resizeMode="contain"></Image>
            <Text style={styles.text1}>
              <Text style={styles.boldText}>- Piezas rojas:</Text> El problema
              establece que se cuentan con 10 piezas.
              {'\n'}
              <Text style={styles.boldText}>- Piezas negras:</Text> El problema
              establece que se cuentan con 10 piezas.
              {'\n'}
              <Text style={styles.boldText}>- Piezas verdes:</Text> El problema
              establece que se cuentan con 2 piezas.
              {'\n\n'}A partir de esta premisa, se calculan las probabilidades,
              como se muestra en la tabla anterior, utilizando la fórmula
              cantidad de piezas/cantidad total.
              {'\n\n'}
              <Text style={styles.boldText}>
                - Generación de número aleatorio:
              </Text>{' '}
              El número aleatorio generado se compara con los rangos de
              probabilidad establecidos en la primera tabla para determinar el
              color correspondiente.
              {'\n'}
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
    backgroundColor: '#e6e6e8',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#666f88',
  },
  instructions: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  infoContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333333',
  },
  text1: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333333',
  },
  image: {
    alignSelf: 'center',
    width: '90%',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Jugar;
