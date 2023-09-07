import {createContext, useEffect, useReducer} from "react";
import {useColorScheme} from "react-native";
import {ThemeState, darkTheme, lightTheme, themeReducer} from "./themeReducer";

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorSchema = useColorScheme();

  const [theme, dispatch] = useReducer(
    themeReducer,
    colorSchema === "dark" ? darkTheme : lightTheme,
  ); //TODO: Lee el tema global

  // useEffect(() => {
  //   AppState.addEventListener("change", status => {
  //     if (status === "active") {
  //       Appearance.getColorScheme() === "dark"
  //         ? setLightTheme()
  //         : setDarkTheme();
  //     }
  //   });
  // }, []);

  //! Solo en IOS por ahora , (ya funciona  09/2023)
  useEffect(() => {
    colorSchema === "light" ? setLightTheme() : setDarkTheme();
  }, [colorSchema]);

  const setDarkTheme = () => {
    dispatch({type: "set_dark_theme"});
  };

  const setLightTheme = () => {
    dispatch({type: "set_light_theme"});
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
