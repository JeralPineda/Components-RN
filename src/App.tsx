import "react-native-gesture-handler";

import React from "react";
import {Navigation} from "./navigation/Navigation";
import {ThemeProvider} from "./context/theme/ThemeContext";

// const customTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors,
//     // primary: 'string',
//     // background: "black",
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//     // notification: 'string',
//   },
// };

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

export default App;

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({children}: AppStateProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

// const styles = StyleSheet.create({});
