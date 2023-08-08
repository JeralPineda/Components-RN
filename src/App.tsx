import "react-native-gesture-handler";

import React from "react";
import {} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {Navigation} from "./navigation/Navigation";

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({});
