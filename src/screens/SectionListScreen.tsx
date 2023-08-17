import React from "react";
import {StyleSheet, Text, View, SectionList} from "react-native";
import {
  FlatListMenuHeader,
  FlatListMenuSeparator,
} from "../components/flatlist";
import {colors, globalStyles} from "../theme";
import {casas} from "../data/section-list";

export const SectionListScreen = () => {
  return (
    <View style={{...globalStyles.margin, ...styles.container}}>
      {/* <FlatListMenuHeader title="Section List" /> */}

      <SectionList
        sections={casas}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={() => <FlatListMenuHeader title="Section List" />}
        ListFooterComponent={() => (
          <FlatListMenuHeader title={"Total casas " + casas.length} />
        )}
        stickySectionHeadersEnabled
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <FlatListMenuHeader title={section.casa} />
          </View>
        )}
        renderSectionFooter={({section}) => (
          <Text style={styles.title}>{"Total: " + section.data.length}</Text>
        )}
        ItemSeparatorComponent={() => <FlatListMenuSeparator />}
        showsVerticalScrollIndicator={false} //!ocultar barra scroll
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
  title: {
    fontSize: 20,
    color: colors.text,
    marginTop: 10,
  },
});
