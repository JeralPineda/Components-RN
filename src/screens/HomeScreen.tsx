import React from "react";
import {StyleSheet, View} from "react-native";
import {globalStyles} from "../theme/";

import {FlatListMenu} from "../components/flatlist";

export const HomeScreen = () => {
  return (
    <View style={{...styles.container, ...globalStyles.margin}}>
      <FlatListMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
