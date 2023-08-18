import React from "react";
import {FlatList} from "react-native";

import {FlatListMenuItem} from "./FlatListMenuItem";
import {FlatListMenuHeader} from "./FlatListMenuHeader";
import {FlatListMenuSeparator} from "./FlatListMenuSeparator";
import {menuItems} from "../../data/menu";

export const FlatListMenu = () => {
  return (
    <FlatList
      data={menuItems}
      renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
      keyExtractor={item => item.name}
      ListHeaderComponent={<FlatListMenuHeader title="Opciones de menu" />}
      ItemSeparatorComponent={() => <FlatListMenuSeparator />}
    />
  );
};
