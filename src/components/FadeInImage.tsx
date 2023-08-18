import React, {useState} from "react";
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from "react-native";
import {useAnimation} from "../hooks";
import {colors} from "../theme";

interface FadeInImageProps {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({uri, style}: FadeInImageProps) => {
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
        style={[style, {opacity}]}
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
