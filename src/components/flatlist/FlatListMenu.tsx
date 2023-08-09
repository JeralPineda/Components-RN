import React from "react";
import {FlatList} from "react-native";
import {FlatListMenuItem} from "./FlatListMenuItem";
import {FlatListMenuHeader} from "./FlatListMenuHeader";
import {FlatListMenuSeparator} from "./FlatListMenuSeparator";
import {MenuItem} from "../../interfaces";

const menuItems: MenuItem[] = [
  {
    name: "Animation 101",
    icon: "cube-outline",
    component: "Animation101Screen",
  },
  {
    name: "Animation 102",
    icon: "albums-outline",
    component: "Animation102Screen",
  },
];

export const FlatListMenu = () => {
  return (
    <FlatList
      data={menuItems}
      renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
      keyExtractor={item => item.name}
      ListHeaderComponent={() => <FlatListMenuHeader />}
      ItemSeparatorComponent={() => <FlatListMenuSeparator />}
    />
  );
};
