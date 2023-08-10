import React from "react";
import {StyleSheet, View, Animated, Button} from "react-native";
import {useAnimation} from "../hooks/useAnimation";

export const Animation101Screen = () => {
  const {position, opacity, fadeIn, fadeOut, startMovingPosition} =
    useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
          opacity,
          // position,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />

      <Button
        title="fadeIn"
        onPress={() => {
          fadeIn();
          startMovingPosition(100);
        }}
      />
      <Button title="fadeOut" onPress={() => fadeOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "#5856d6",
  },
});
