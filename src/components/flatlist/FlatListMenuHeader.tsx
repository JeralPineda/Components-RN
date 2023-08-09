import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {globalStyles} from "../../theme";

export const FlatListMenuHeader = () => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 20, ...styles.header}}>
      <Text style={globalStyles.title}>Opciones de Menu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
});
