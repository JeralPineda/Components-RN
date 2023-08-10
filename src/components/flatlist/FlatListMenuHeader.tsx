import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {globalStyles} from "../../theme";

interface FlatListMenuHeaderProps {
  title: string;
}

export const FlatListMenuHeader = ({title}: FlatListMenuHeaderProps) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{marginTop: top + 20, ...styles.header}}>
      <Text style={globalStyles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
});
