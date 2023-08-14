import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {MenuItem} from "../../interfaces";
import {Spacer} from "../spacer";
import {useNavigation} from "@react-navigation/native";

interface FlatListMenuItemProps {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: FlatListMenuItemProps) => {
  const {icon, name, component} = menuItem;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(component as never)}>
      <View style={styles.container}>
        <Icon name={icon} size={24} color="#5856d6" />
        <Text style={styles.itemText}>{name}</Text>
        <Spacer />
        <Icon name="chevron-forward-outline" size={24} color="#5856d6" />
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
