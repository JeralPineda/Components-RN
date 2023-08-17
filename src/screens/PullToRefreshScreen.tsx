import React, {useState} from "react";
import {StyleSheet, Text, View, ScrollView, RefreshControl} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {colors, globalStyles} from "../theme";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState("");

  //alternativa para solucionar el top con el notch al hacer pul to refresh
  const {top} = useSafeAreaInsets();

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log("Terminamis!!");
      setRefreshing(false);
      setData("Hola mundo");
    }, 1500);
  };

  return (
    <ScrollView
      style={{marginTop: refreshing ? top : 0}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10} //!alto del refresh, no funciona en ios con el notch
          progressBackgroundColor={colors.primary} //! Android
          // colors={["white", "red", "orange"]} //! Android
          // style={styles.background} //! estilos globales, IOS
          // tintColor="white" //! color del spinner, IOS
          // title="Refrehing" //! IOS
          // titleColor="white" //! IOS
        />
      }>
      <View style={globalStyles.margin}>
        <FlatListMenuHeader title="Pull to refresh" />

        {data && <Text style={styles.title}>{data}</Text>}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.text,
  },
  background: {
    backgroundColor: colors.primary,
  },
});
