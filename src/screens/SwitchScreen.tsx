import React, {useContext, useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {Switch} from "../components/form";
import {ThemeContext} from "../context/theme/ThemeContext";

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActivity: false,
    isHungry: false,
    isHappy: true,
  });
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {isActivity, isHungry, isHappy} = state;

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  return (
    <View style={styles.container}>
      <FlatListMenuHeader title="Sweetches" />

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isActive</Text>
        <Switch
          isOn={isActivity}
          onChange={value => onChange(value, "isActivity")}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHungry</Text>
        <Switch
          isOn={isHungry}
          onChange={value => onChange(value, "isHungry")}
        />
      </View>

      <View style={styles.switchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>isHappy</Text>
        <Switch isOn={isHappy} onChange={value => onChange(value, "isHappy")} />
      </View>

      <Text style={{...styles.switchText, color: colors.text}}>
        {JSON.stringify(state, null, 3)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    // alignItems: "flex-start",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  switchText: {
    fontSize: 20,
    color: "#646363",
  },
});
