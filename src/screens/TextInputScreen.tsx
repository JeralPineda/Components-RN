import React from "react";
import {StyleSheet, View, TextInput} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {globalStyles} from "../theme";

export const TextInputScreen = () => {
  return (
    <View style={globalStyles.margin}>
      <FlatListMenuHeader title="TextInputs" />

      <TextInput style={styles.textInput} />
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
  },
});
