import React from "react";
import {StyleSheet, View} from "react-native";

export const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#b0d656",
  },
});
