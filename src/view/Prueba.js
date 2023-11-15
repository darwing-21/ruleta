import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Prueba = () => {
  const navigation = useNavigation();
  const [apuesta, setApuesta] = useState('1');
  const [color, setColor] = useState('ROJO');
  const [corrida, setCorrida] = useState('10');
  const [cantidad, setCantidad] = useState('200');
  const [cantidadFinal, setCantidadFinal] = useState('');
  const [iteraciones, setIteraciones] = useState([]);

  const [rojo, setRojo] = useState('');
  const [negro, setNegro] = useState('');
  const [verde, setVerde] = useState('');

  const validar = (
    apuestaParseado,
    color,
    corridaParseado,
    cantidadParseado,
  ) => {
    let res = true;
    switch (true) {
      case corridaParseado < 10 || corridaParseado > 1000:
        Alert.alert(
          'Error',
          'Ingrese un número válido en el rango de 10 a 1000',
        );
        res = false;
        break;
      case cantidadParseado < 200:
        Alert.alert('Error', 'Ingrese una cantidad válida mayor a 200');
        res = false;
        break;
      case apuestaParseado <= 0 || apuestaParseado > cantidadParseado:
        Alert.alert(
          'Error',
          'Ingrese una apuesta válida mayor a 0 y menor a su cantidad',
        );
        res = false;
        break;
      case color !== 'ROJO' && color !== 'NEGRO':
        Alert.alert('Error', 'Ingrese un color ROJO o NEGRO');
        res = false;
        break;
      default:
        break;
    }
    return res;
  };

  const obtenerColor = aleatorio => {
    let color;
    switch (true) {
      case aleatorio >= 0 && aleatorio < 0.45:
        color = 'ROJO';
        break;
      case aleatorio >= 0.45 && aleatorio < 0.91:
        color = 'NEGRO';
        break;
      default:
        color = 'VERDE';
        break;
    }
    return color;
  };

  const contarColors = colorsArray => {
    let rojo = 0;
    let negro = 0;
    let verde = 0;

    for (let i = 0; i < colorsArray.length; i++) {
      switch (colorsArray[i]) {
        case 'ROJO':
          rojo++;
          break;
        case 'NEGRO':
          negro++;
          break;
        default:
          verde++;
      }
    }
    setRojo(rojo);
    setNegro(negro);
    setVerde(verde);
  };

  const handleCalcular = () => {
    const apuestaParseado = parseFloat(apuesta);
    const corridaParseado = parseFloat(corrida);
    const cantidadParseado = parseFloat(cantidad);
    if (validar(apuestaParseado, color, corridaParseado, cantidadParseado)) {
      const colorsArray = [];
      const iteracionesArray = [];
      let cantidadI = cantidadParseado;
      let apuestaI = apuestaParseado;
      let cantidadN;
      let apuestaN;
      let auxiliar = 'NINGUNO';
      let colorA;
      for (let i = 1; i <= corridaParseado; i++) {
        const aleatorio = Math.round(Math.random() * 1000) / 1000;
        if (cantidadI >= apuestaI && apuestaI <= 500) {
          colorA = obtenerColor(aleatorio);

          if (auxiliar === 'VERDE') {
            if (colorA === 'VERDE') {
              cantidadN = cantidadI;
              auxiliar = 'VERDE';
              apuestaN = apuestaI;
            } else {
              auxiliar = colorA === color ? 'SI' : 'NO';
              cantidadN = colorA === color ? cantidadI : cantidadI - apuestaI;
              apuestaN = colorA === color ? apuestaParseado : apuestaI;
            }
          } else {
            if (colorA === 'VERDE') {
              cantidadN = cantidadI;
              auxiliar = 'VERDE';
              apuestaN = apuestaI;
            } else {
              auxiliar = colorA === color ? 'SI' : 'NO';
              cantidadN =
                colorA === color ? cantidadI + apuestaI : cantidadI - apuestaI;
              apuestaN = colorA === color ? apuestaParseado : apuestaI;
            }
          }
        } else {
          Alert.alert('FIN DEL JUEGO', 'La cantidad final es: ' + cantidadI);
          break;
        }

        const iteracion = {
          i: i,
          cantidad: cantidadI,
          apuesta: apuestaI,
          aleatorio: aleatorio,
          color: colorA,
          cantidadNueva: cantidadN,
          auxiliar: auxiliar,
        };
        cantidadI = parseFloat(cantidadN);
        apuestaI = parseFloat(apuestaN);
        colorsArray.push(colorA);
        iteracionesArray.push(iteracion);
      }
      contarColors(colorsArray);
      setIteraciones(iteracionesArray);
      setCantidadFinal(cantidadI);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Cant. corridas:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setCorrida(text)}
              keyboardType="numeric"
              value={corrida}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Cantidad Inicial:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setCantidad(text)}
              keyboardType="numeric"
              value={cantidad}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Apuesta:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setApuesta(text)}
              keyboardType="numeric"
              value={apuesta}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Color:</Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setColor(text)}
              keyboardType="default"
              value={color}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleCalcular}>
          <Text style={styles.buttonText}>Simular</Text>
        </TouchableOpacity>

        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}>N</Text>
          <Text style={styles.tableHeader}>Cant</Text>
          <Text style={styles.tableHeader}>Apuesta</Text>
          <Text style={styles.tableHeader}>Aleatorio</Text>
          <Text style={styles.tableHeader}>Color</Text>
        </View>
        {iteraciones.map((iteracion, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableData}>{iteracion.i}</Text>
            <Text style={styles.tableData}>{iteracion.cantidad}</Text>
            <Text style={styles.tableData}>{iteracion.apuesta}</Text>
            <Text style={styles.tableData}>{iteracion.aleatorio}</Text>
            <Text style={styles.tableData}>{iteracion.color}</Text>
          </View>
        ))}
        <View style={styles.textContainer}>
          <Text style={styles.p}>Cantidad final: </Text>
          <Text style={styles.boldText}>{cantidadFinal}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.p}>Cantidad de colores: </Text>
          <Text style={styles.boldText}> ROJO = {rojo};</Text>
          <Text style={styles.boldText}> NEGRO = {negro};</Text>
          <Text style={styles.boldText}> VERDE = {verde};</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#E4CEF2',
  },
  formContainer: {
    flexDirection: 'column',
    backgroundColor: '#E4CEF2',
    padding: 10,
    borderRadius: 15,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  label: {
    width: '40%',
    fontWeight: 'bold',
    color: '#8B65BF',
    fontSize: 15,
  },

  input: {
    marginLeft: 1,
    width: '40%',
    borderColor: '#ffffff',
    borderWidth: 1,
    padding: 5,
    marginBottom: 5,
    backgroundColor: '#7374FA',
    borderRadius: 10,
    color: '#ffffff',
    fontSize: 15,
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
    borderColor: '#ffffff',
    padding: 5,
  },
  tableHeader: {
    flex: 1,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#8B65BF',
    color: '#ffffff',
    textAlign: 'center',
  },
  tableData: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  p: {
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#9C71D9',
    alignSelf: 'center',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
  buttonText: {
    color: '#f1f1f1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Prueba;
