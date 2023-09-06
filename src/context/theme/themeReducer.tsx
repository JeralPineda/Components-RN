import {Theme} from "@react-navigation/native";

type ThemeAction = {type: "set_light_theme"} | {type: "set_dark_theme"};

export interface ThemeState extends Theme {
  currentTheme: "light" | "dark";
  dividerColor: string;
}

const lightTheme: ThemeState = {
  currentTheme: "light",
  dark: false,
  dividerColor: "rgba(0,0,0,0.7)",
  colors: {
    primary: "#5856d6",
    background: "blue",
    card: "green",

    // secondary: "#dbdbdb",
    text: "#333333",
    border: "orange",
    notification: "teal",
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case "set_light_theme":
      return {
        ...lightTheme,
      };

    default:
      return state;
  }
};