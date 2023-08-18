import React, {useState} from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  View,
} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {colors} from "../theme";

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return (
      <Image
        style={styles.image}
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
      />
    );
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
        ListFooterComponent={
          <View>
            <ActivityIndicator size={35} color={colors.primary} />
          </View>
        }
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
  image: {
    height: 400,
    width: "100%",
  },
  footer: {
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
