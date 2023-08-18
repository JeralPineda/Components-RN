import React, {useState} from "react";
import {ActivityIndicator, Animated, StyleSheet, View} from "react-native";
import {useAnimation} from "../hooks";
import {colors} from "../theme";

interface FadeInImageProps {
  uri: string;
}

export const FadeInImage = ({uri}: FadeInImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const {opacity, fadeIn} = useAnimation();

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <ActivityIndicator
          style={styles.activity}
          size={30}
          color={colors.primary}
        />
      )}

      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          width: "100%",
          height: 400,
          opacity,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  activity: {
    position: "absolute",
  },
  image: {
    width: "100%",
    height: 400,
  },
});
