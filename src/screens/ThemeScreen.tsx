import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../theme";
import {FlatListMenuHeader} from "../components/flatlist";

export const ThemeScreen = () => {
  return (
    <View style={globalStyles.margin}>
      <FlatListMenuHeader title="Themes" />

      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
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
