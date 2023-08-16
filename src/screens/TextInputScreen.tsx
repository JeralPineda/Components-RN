import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {globalStyles} from "../theme";
import {useForm} from "../hooks/useForm";
import {Switch} from "../components/form";

export const TextInputScreen = () => {
  const {form, onChange, isSuscribed} = useForm({
    name: "",
    email: "",
    phone: "",
    isSuscribed: false,
  });

  // const onChange = (value: string, field: string) => {
  //   setForm({
  //     ...form,
  //     [field]: value,
  //   });
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* Cerrar teclado al hacer click afuera, cuando no funciona */}
        <ScrollView>
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

            <View style={styles.switchRow}>
              <Text style={styles.switchText}>Suscribirse</Text>
              <Switch
                isOn={isSuscribed}
                onChange={value => onChange(value, "isSuscribed")}
              />
            </View>

            <FlatListMenuHeader title={JSON.stringify(form, null, 3)} />
            <FlatListMenuHeader title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={styles.textInput}
              placeholder="Ingrese su teléfono"
              autoCorrect={false} // deshabilitar el auto corrector y sugerencias
              onChangeText={value => onChange(value, "phone")}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.separator} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    borderColor: "#dbdbdb",
    borderWidth: 1.5,
    borderRadius: 6,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  switchText: {
    fontSize: 20,
    color: "#646363",
  },
  separator: {
    height: 100,
  },
});
