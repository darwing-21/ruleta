import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Prueba = () => {
  const navigation = useNavigation();

  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');
  const [iteraciones, setIteraciones] = useState([]);
  const [cantidadFinal, setCantidadFinal] = useState('');

  const handleCalcular = () => {
    if (numero === '') {
      Alert.alert('Error', 'Por favor, ingrese un número');
    } else {
      const numeroParseado = parseFloat(numero);
      if (
        !isNaN(numeroParseado) &&
        numeroParseado >= 10 &&
        numeroParseado <= 1000
      ) {
        setResultado(`Número ingresado: ${numeroParseado}`);
        const iteracionesArray = [];
        let cantidad = 200;
        let apuesta = 1;
        let cantidadN;
        let gano = 'NINGUNO';
        let color;
        let apuestaN = 1;

        for (let i = 1; i <= numeroParseado; i++) {
          const aleatorio = Math.round(Math.random() * 1000) / 1000;

          if (aleatorio >= 0 && aleatorio < 0.45) {
            color = 'ROJO';
            if (gano == 'VERDE') {
              cantidadN = cantidad;
            } else {
              cantidadN = cantidad + apuestaN;
            }
            apuestaN = 1;
            gano = 'SI';
          } else if (aleatorio >= 0.45 && aleatorio < 0.91) {
            color = 'NEGRO';
            if (gano == 'VERDE') {
              cantidadN = cantidad - apuestaN;
            } else {
              cantidadN = cantidad - apuestaN;
            }
            apuestaN = apuestaN * 2;
            gano = 'NO';
          } else {
            cantidadN = cantidad;
            color = 'VERDE';
            gano = 'VERDE';
          }
          const iteracion = {
            i: i,
            cantidad: cantidad,
            apuesta: apuesta,
            numeroAleatorio: aleatorio,
            color: color,
            cantidadNueva: cantidadN,
            termina: 'NO',
            gano: gano,
          };
          apuesta = apuestaN;
          cantidad = cantidadN;
          iteracionesArray.push(iteracion);
        }
        setCantidadFinal(cantidad);
        setIteraciones(iteracionesArray);
      } else {
        Alert.alert(
          'Error',
          'Por favor, ingrese un número válido mayor que 10 y menor que 1000',
        );
      }
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Piezas</Text>
            <Text style={styles.tableHeader}>Cantidad</Text>
            <Text style={styles.tableHeader}>Probabilidad acumulada</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableData}>ROJAS</Text>
            <Text style={styles.tableData}>10</Text>
            <Text style={styles.tableData}>0.45</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableData}>NEGRAS</Text>
            <Text style={styles.tableData}>10</Text>
            <Text style={styles.tableData}>0.91</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableData}>VERDES</Text>
            <Text style={styles.tableData}>2</Text>
            <Text style={styles.tableData}>1.00</Text>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text>Numero de corrida:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setNumero(text)}
            keyboardType="numeric"
            value={numero}
          />
        </View>
        <Button title="Simular" onPress={handleCalcular} />
        <View style={styles.tableRow}>
          <Text style={styles.tableData}>N</Text>
          <Text style={styles.tableData}>Cant</Text>
          <Text style={styles.tableData}>Apuesta</Text>
          <Text style={styles.tableData}>Aleatorio</Text>
          <Text style={styles.tableData}>Color</Text>
        </View>
        {iteraciones.map((iteracion, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableData}>{iteracion.i}</Text>
            <Text style={styles.tableData}>{iteracion.cantidad}</Text>
            <Text style={styles.tableData}>{iteracion.apuesta}</Text>
            <Text style={styles.tableData}>{iteracion.numeroAleatorio}</Text>
            <Text style={styles.tableData}>{iteracion.color}</Text>
          </View>
        ))}
        <View style={styles.textContainer}>
          <Text style={styles.label}>Cantidad final: </Text>
          <Text style={styles.boldText}>{cantidadFinal}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  tableHeader: {
    flex: 1,
    fontWeight: 'bold',
    padding: 10,
  },
  tableData: {
    flex: 1,
    padding: 10,
  },
  input: {
    marginLeft: 10,
    width: '20%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 2,
    marginBottom: 10,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default Prueba;
