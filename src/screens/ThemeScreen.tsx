import React, {useContext} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../theme";
import {FlatListMenuHeader} from "../components/flatlist";
import {ThemeContext} from "../context/theme/ThemeContext";

export const ThemeScreen = () => {
  const {setDarkTheme} = useContext(ThemeContext);

  return (
    <View style={globalStyles.margin}>
      <FlatListMenuHeader title="Themes" />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={setDarkTheme}>
        <Text style={styles.text}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    backgroundColor: "#5856d6",
    borderRadius: 20,
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});
