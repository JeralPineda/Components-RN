import React from "react";
import {StyleSheet, Text, View, SectionList} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {globalStyles} from "../theme";
import {casas} from "../data/section-list";

export const SectionListScreen = () => {
  return (
    <View style={{...globalStyles.margin, ...styles.container}}>
      {/* <FlatListMenuHeader title="Section List" /> */}

      <SectionList
        sections={casas}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <FlatListMenuHeader title={section.casa} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: "white", //!IOS
  },
});
