import React, {useContext} from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import {ThemeContext} from "../../context/theme/ThemeContext";
import {MenuItem} from "../../interfaces";
import {Spacer} from "../spacer";

interface FlatListMenuItemProps {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: FlatListMenuItemProps) => {
  const {icon, name, component} = menuItem;
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(component as never)}>
      <View style={styles.container}>
        <Icon name={icon} size={24} color={colors.primary} />
        <Text style={{...styles.itemText, color: colors.text}}>{name}</Text>
        <Spacer />
        <Icon name="chevron-forward-outline" size={24} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  spacer: {
    flex: 1,
  },
  iconContainer: {
    flexDirection: "row",
  },
  itemText: {
    marginLeft: 5,
    fontSize: 18,
  },
});
