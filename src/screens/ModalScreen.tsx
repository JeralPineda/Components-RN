import React, {useState} from "react";
import {StyleSheet, Text, View, Button, Modal} from "react-native";
import {FlatListMenuHeader} from "../components/flatlist";
import {globalStyles} from "../theme";

export const ModalScreen = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <View style={globalStyles.margin}>
      <FlatListMenuHeader title="Modal" />

      <Button title="Abrir modal" onPress={() => setIsOpenModal(true)} />

      {/* Background */}
      <Modal
        //

        animationType="fade"
        transparent={true}
        visible={isOpenModal}>
        <View style={styles.modalContainer}>
          {/* Content */}
          <View style={styles.contentModal}>
            <Text style={globalStyles.title}>Modal</Text>
            <Text>Cuerpo del modal</Text>
            <Button
              title="Cerrar modal"
              onPress={() => setIsOpenModal(false)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  contentModal: {
    backgroundColor: "white",
    padding: 20,
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25, //! Sombra IOS
    elevation: 10, //! Sombra Android
  },
});
