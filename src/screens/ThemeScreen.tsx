import React, {useContext} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../theme";
import {FlatListMenuHeader} from "../components/flatlist";
import {ThemeContext} from "../context/theme/ThemeContext";

export const ThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={globalStyles.margin}>
      <FlatListMenuHeader title="Themes" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={setLightTheme}>
          <Text style={styles.text}>☀</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.button, backgroundColor: colors.primary}}
          activeOpacity={0.8}
          onPress={setDarkTheme}>
          <Text style={styles.text}>🌙</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});
