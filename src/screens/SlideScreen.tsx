import React from "react";
import {StyleSheet, Text, View} from "react-native";
import { FlatListMenuHeader } from "../components/flatlist";

export const SlideScreen = () => {
  return (
    <View>
      <FlatListMenuHeader title="Slides" />

      <Text>SlideScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
