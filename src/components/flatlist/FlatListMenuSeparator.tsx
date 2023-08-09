import React from "react";
import {StyleSheet, View} from "react-native";

export const FlatListMenuSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: 2,
    backgroundColor: "#dbdbdb",
    marginVertical: 10,
    opacity: 0.5,
  },
});
