import React, {useState} from "react";
import {StyleSheet, Switch, Platform} from "react-native";

interface CustomSwitchProps {
  isOn: boolean;                  
}

export const CustomSwitch = ({isOn}: CustomSwitchProps) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <Switch
      trackColor={{false: "#d9d9db", true: "#5856d6"}}
      thumbColor={Platform.OS === "android" ? "#5856d6" : ""}
      // ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

const styles = StyleSheet.create({});
