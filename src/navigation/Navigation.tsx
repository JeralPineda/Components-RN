import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {
  AlertScreen,
  Animation101Screen,
  Animation102Screen,
  HomeScreen,
  InfiniteScrollScreen,
  ModalScreen,
  PullToRefreshScreen,
  SectionListScreen,
  SlideScreen,
  SwitchScreen,
  TextInputScreen,
} from "../screens";
import {ThemeScreen} from "../screens/ThemeScreen";

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          // shadowColor: "transparent", //IOS
        },
        cardStyle: {
          // backgroundColor: "white",
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
      <Stack.Screen
        name="PullToRefreshScreen"
        component={PullToRefreshScreen}
      />
      <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
      <Stack.Screen name="SlideScreen" component={SlideScreen} />
      <Stack.Screen name="ThemeScreen" component={ThemeScreen} />
    </Stack.Navigator>
  );
};
