import React, {useState} from "react";
import {StyleSheet, View, Text} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {Switch} from "../components/form";

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActivity: false,
    isHungry: false,
    inHappy: true,
  });

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
        <Text style={styles.switchText}>isActive</Text>
        <Switch isOn={true} onChange={value => onChange(value, "isActivity")} />
      </View>

      <Text style={styles.switchText}>{JSON.stringify(state, null, 3)}</Text>
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
