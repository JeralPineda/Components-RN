import "react-native-gesture-handler";

import React from "react";
import {} from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  Theme,
} from "@react-navigation/native";
import {Navigation} from "./navigation/Navigation";

const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'string',
    // background: "black",
    // card: 'string',
    // text: 'string',
    // border: 'string',
    // notification: 'string',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({});
