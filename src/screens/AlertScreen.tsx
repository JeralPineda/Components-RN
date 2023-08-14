import React from "react";
import {StyleSheet, Button, View, Alert} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {globalStyles} from "../theme";

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      "Titulo",
      "Este es el mensaje de la alerta",
      [
        {text: "OK", onPress: () => console.log("OK Pressed")},
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "destructive",
        },
      ],
      //! Es recomendable obligar a que lo cierre haciendo click en cancelar
      // {
      //   cancelable: true, //Cerrar al hacer click afuera
      //   onDismiss: () => console.log("onDismiss"),
      // },
    );
  };

  const showPrompt = () => {
    //* Nativo solo para IOS, esta implementación se puede solucionar con la creación de un modal o un paquete de terceros(esta es la ultima opción)
    Alert.prompt(
      "¿Estas seguro?",
      "Esta acción no se puede revertir",
      (valor: string) => console.log("info:", valor),
      "default",
      "Hola mundo", //default value
      "number-pad", //teclado numérico o de lo que se necesite
    );
  };

  return (
    <View style={globalStyles.margin}>
      <FlatListMenuHeader title="Alerts" />

      <Button title="Mostrar Alerta" onPress={showAlert} />

      <View style={styles.margin} />

      {/* //* Nativo solo para IOS, esta implementación se puede solucionar con la creación de un modal o un paquete de terceros */}
      <Button title="Mostrar Prompt" onPress={showPrompt} />
    </View>
  );
};

const styles = StyleSheet.create({
  margin: {
    marginBottom: 10,
  },
});
