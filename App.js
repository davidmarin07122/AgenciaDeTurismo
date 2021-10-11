import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  ImageBackground,
  Picker,
  CheckBox,
  TextInput,
  Button,
} from "react-native";


export default function App() {

  const [Identificacion, setIdentificacion] = useState("");
  const [Nombre, setNombre] = useState("");
  const [numeroPersonas, setnumeroPersonas] = useState("");
  const [NumeroDias, setNumeroDias] = useState("");
  const [total, settotal] = useState("");

  const [destino, setdestino] = useState(0);

  const [valSwitch, setvalSwitch] = useState(0);
  const [valSwitch1, setvalSwitch1] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);

  let itemValue = 0;

  const ToggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (!isEnabled) {
      setvalSwitch(100000);
    } else {
      setvalSwitch(0);
    }
  };

  const ToggleSwitch1 = () => {
    setIsEnabled1((previousState) => !previousState);
    if (!isEnabled1) {
      setvalSwitch1(120000);
    } else {
      setvalSwitch1(0);
    }
  };

  const calcular = (operador) => {

    const cartagena = 300000;
    const santaMarta = 250000;
    const sanAndres = 200000;
    let totalA = 0;
    let total = 0;
    let descuento = 0;

    switch (operador) {

      case "1":

        if (numeroPersonas > 10) {
          totalA = ((cartagena * parseFloat(numeroPersonas) * NumeroDias) + valSwitch + valSwitch1);
          descuento = totalA * .10;
          total = totalA - descuento;
        } else {
          total = (cartagena * parseFloat(numeroPersonas) * NumeroDias) + valSwitch + valSwitch1;
        }
        break;

      case "2":
        if (numeroPersonas > 10) {
          totalA = (santaMarta * parseFloat(numeroPersonas) * NumeroDias) + valSwitch + valSwitch1;
          descuento = totalA * .10;
          total = totalA - descuento;
        } else {
          total = (santaMarta * parseFloat(numeroPersonas) * NumeroDias) + valSwitch + valSwitch1;
        }
        break;
        
      case "3":

        if (numeroPersonas > 10) {
          totalA = (sanAndres * parseFloat(numeroPersonas) * NumeroDias) + valSwitch + valSwitch1;
          descuento = totalA * .10;
          total = totalA - descuento;
        } else {
          total = (sanAndres * parseFloat(numeroPersonas) * NumeroDias) + valSwitch + valSwitch1;
        }
        break;

      default:
        break;
    }

    settotal(total);

  }
  return (
    <View style={styles.container}>

      <text>AGENCIA DE TURISMO</text>

      <Image
        source={require("./assets/banner1.jpg")}
        style={{
          width: "100%",
          height: 300,
          borderRadius: "5%",
          resizeMode: "stretch",
          margin: 20,
        }}
      />

      <View>
        <text>Identificacion</text>
        <TextInput

          style={{ borderBottomWidth: 2, color: "blue", backgroundColor: "aqua" }}
          onChangeText={(Identificacion) => setIdentificacion(Identificacion)}
          value={Identificacion}
        />
        <text>Nombre</text>
        <TextInput

          style={{ borderBottomWidth: 2, color: "blue", backgroundColor: "aqua" }}
          onChangeText={(Nombre) => setNombre(Nombre)}
          value={Nombre}
        />

      </View>

      <View style={{
        padding: 20,
      }}>

        <text>Destino</text>
        <Picker
          selectedValue={destino}
          style={{ height: 35, width: 190, borderColor: "white" }}
          onValueChange={(itemValue, itemIndex) => setdestino(itemValue)}
        >
          <Picker.Item label="(Selecciona tu destino)" value="0" />

          <Picker.Item label="Cartagena" value="1" />

          <Picker.Item label="Santa marta" value="2" />

          <Picker.Item label="San andres" value="3" />
        </Picker>
      </View>

      <View style={{ padding: 20 }} >
        <text>Numero de personas</text>
        <TextInput

          style={{ borderBottomWidth: 2, color: "blue", backgroundColor: "aqua" }}
          onChangeText={(numeroPersonas) => setnumeroPersonas(numeroPersonas)}
          value={numeroPersonas}
        />
        <text>Numero de dias</text>
        <TextInput

          style={{ borderBottomWidth: 2, color: "blue", backgroundColor: "aqua" }}
          onChangeText={(NumeroDias) => setNumeroDias(NumeroDias)}
          value={NumeroDias}
        />

      </View>

      <text>Adicionales</text>

      <View style={{ flexDirection: "row", padding: 10 }}>
        <Text style={{ marginLeft: 50 }}>
          Barco
        </Text>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={ToggleSwitch}
          value={isEnabled}
        >
        </Switch>
      </View>

      <View style={{ flexDirection: "row", padding: 10 }}>
        <Text style={{ marginLeft: 50 }}>
          Dicoteca
        </Text>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={ToggleSwitch1}
          value={isEnabled1}
        >
        </Switch>
      </View>

      <text>Total a pagar</text>
      <TextInput
        style={{
          borderBottomWidth: 2,
          color: "blue",
          backgroundColor: "#FE967F",
        }}
        value={total}
      />


      <Text>{"\n"}</Text>
      <Button title="Calcular" onPress={() => calcular(destino)} />

      <Text>{"\n"}</Text>
      <Button title="limpiar" onPress={() => calcResultado("c")} />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//Dependiendo del destino el precio por persona es

//cartagena 300000
//santa marta 250000
//san andres 200000
// si el numero de personas es superior a 10 tiene un descuneto del 10 %

// los costos de los adicionales son 

// barco 100000 por persona
// discoteca 120000 por pesona 
