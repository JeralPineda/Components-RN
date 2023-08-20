import React from "react";
import {Image} from "react-native";
import {
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
} from "react-native";
import Carousel from "react-native-snap-carousel";

import {colors} from "../theme";

const {width: screenWidth} = Dimensions.get("window");

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../assets/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../assets/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../assets/slide-3.png"),
  },
];

const renderItem = (item: Slide) => {
  return (
    <View style={styles.containerSlide}>
      <Image source={item.img} style={styles.image} />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.desc}</Text>
    </View>
  );
};

export const SlideScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={items}
        // ref={c => {
        //   this._carousel = c;
        // }}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  containerSlide: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 6,
    padding: 40,
    justifyContent: "center",
  },

  image: {
    width: 350,
    height: 400,
    resizeMode: "center",
  },
  title: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    color: colors.text,
    fontSize: 16,
  },
});
