import React, {useState} from "react";
import {StyleSheet, View, Switch, Platform} from "react-native";

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: "#d9d9db", true: "#5856d6"}}
        thumbColor={Platform.OS === "android" ? "#5856d6" : ""}
        // ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
