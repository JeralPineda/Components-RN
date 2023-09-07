import React, {useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {globalStyles} from "../../theme";
import {ThemeContext} from "../../context/theme/ThemeContext";

interface FlatListMenuHeaderProps {
  title: string;
}

export const FlatListMenuHeader = ({title}: FlatListMenuHeaderProps) => {
  const {top} = useSafeAreaInsets();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{marginTop: top + 20, ...styles.header}}>
      <Text style={{...globalStyles.title, color: colors.text}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
  },
});
