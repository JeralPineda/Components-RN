import React, {useState} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => {
    return <Text style={styles.textItem}>{item}</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<FlatListMenuHeader title="InfiniteScroll" />}
        onEndReached={loadMore} //! dispara al llegar al final
        onEndReachedThreshold={0.5} //! indica que tan cerca tiene que estar del fondo para disparar acción o cargar de los demás elementos
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textItem: {
    height: 150,
    textAlign: "center",
  },
});
