import React, {useContext, useRef, useState} from "react";
import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Carousel, {Pagination} from "react-native-snap-carousel";
import Icon from "react-native-vector-icons/Ionicons";

import {useAnimation} from "../hooks";
import {colors} from "../theme";
import {StackScreenProps} from "@react-navigation/stack";
import {ThemeContext} from "../context/theme/ThemeContext";
import {ThemeState} from "../context/theme/themeReducer";

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

const renderItem = (item: Slide, theme: ThemeState) => {
  const {colors} = theme;

  return (
    <View
      style={{...styles.containerSlide, backgroundColor: colors.background}}>
      <Image source={item.img} style={styles.image} />

      <Text style={{...styles.title, color: colors.text}}>{item.title}</Text>
      <Text style={{...styles.description, color: colors.text}}>
        {item.desc}
      </Text>
    </View>
  );
};

interface Props extends StackScreenProps<any, any> {}

export const SlideScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const {opacity, fadeIn} = useAnimation();
  const isVisible = useRef(false);
  const {theme} = useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={items}
        // ref={c => {
        //   this._carousel = c;
        // }}
        renderItem={({item}: any) => renderItem(item, theme)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={(index: number) => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn();
          }
        }}
        defaultIndex={activeIndex}
      />

      <View style={styles.paginationContainer}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: colors.primary,
          }}
        />

        {/* {isVisible && ( */}
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={styles.pagination}
            onPress={() => {
              if (isVisible.current) {
                navigation.navigate("HomeScreen");
              }
            }}
            activeOpacity={0.8}>
            <Text style={styles.icon}>Entrar</Text>
            <Icon name="chevron-forward-outline" color="white" size={20} />
          </TouchableOpacity>
        </Animated.View>
        {/* )} */}
      </View>
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

  paginationContainer: {
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  pagination: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    width: 120,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 20,
    color: "white",
  },
});
