import {Theme} from "@react-navigation/native";

type ThemeAction = {type: "set_light_theme"} | {type: "set_dark_theme"};

export interface ThemeState extends Theme {
  currentTheme: "light" | "dark";
  dividerColor: string;
  borderColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: "light",
  dark: false,
  dividerColor: "rgba(0,0,0,0.7)",
  borderColor: "rgba(0,0,0,0.7)",
  colors: {
    primary: "#5856d6",
    background: "#fff",
    card: "green",

    // secondary: "#dbdbdb",
    text: "#333333",
    border: "transparent",
    notification: "teal",
  },
};

export const darkTheme: ThemeState = {
  currentTheme: "dark",
  dark: true,
  dividerColor: "rgba(0,0,0,0.7)",
  borderColor: "rgba(255,255,255,0.7)",

  colors: {
    primary: "#5856d6",
    background: "#000",
    card: "green",

    // secondary: "#dbdbdb",
    text: "#fff",
    border: "rgba(255, 255, 255, 0.308)",
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

    case "set_dark_theme":
      return {
        ...darkTheme,
      };

    default:
      return state;
  }
};
