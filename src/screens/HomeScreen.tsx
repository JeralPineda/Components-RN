import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const menuItems = [
  {
    name: "Animation 101",
    icon: "cube-outline",
    components: "Animation101Screen",
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>{menuItem.name}</Text>
        <Icon name={menuItem.icon} size={24} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
