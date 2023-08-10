import React, {useState} from "react";
import {StyleSheet, View, Switch, Platform} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <FlatListMenuHeader title="Sweetches" />

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
    marginHorizontal: 20,
  },
});
