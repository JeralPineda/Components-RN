import React, {useState} from "react";
import {StyleSheet, Text, View, ScrollView, RefreshControl} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {globalStyles} from "../theme";

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      console.log("Terminamis!!");
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <View style={globalStyles.margin}>
        <FlatListMenuHeader title="Pull to refresh" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
