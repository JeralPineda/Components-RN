import React, {useState} from "react";
import {StyleSheet, View, TextInput} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {globalStyles} from "../theme";

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onChange = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <View style={globalStyles.margin}>
      <FlatListMenuHeader title="TextInputs" />

      <TextInput
        style={styles.textInput}
        placeholder="Ingrese su nombre"
        autoCorrect={false} // deshabilitar el auto corrector y sugerencias
        autoCapitalize="words" //! no funciona
        onChangeText={value => onChange(value, "name")}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Ingrese su email"
        autoCorrect={false} // deshabilitar el auto corrector y sugerencias
        autoCapitalize="none"
        onChangeText={value => onChange(value, "email")}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.textInput}
        placeholder="Ingrese su teléfono"
        autoCorrect={false} // deshabilitar el auto corrector y sugerencias
        onChangeText={value => onChange(value, "phone")}
        keyboardType="phone-pad"
      />

      <FlatListMenuHeader title={JSON.stringify(form, null, 3)} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#dbdbdb",
    borderWidth: 1.5,
    borderRadius: 6,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
