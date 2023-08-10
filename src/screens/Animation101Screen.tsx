import React, {useRef, useEffect} from "react";
import {StyleSheet, View, Animated, Button, Easing} from "react-native";

export const Animation101Screen = () => {
  const opacity = useRef(new Animated.Value(0.4)).current;
  const top = useRef(new Animated.Value(-100)).current;

  const fadeIn = (callback?: Function) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => (callback ? callback() : null));

    Animated.timing(top, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const fadeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(top, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
          opacity,
          // top,
          transform: [
            {
              translateY: top,
            },
          ],
        }}
      />

      <Button title="fadeIn" onPress={() => fadeIn()} />
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
