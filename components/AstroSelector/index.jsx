// components/AstroSelector.js
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

const AstroSelector = ({ selectedAstro, setAstro }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const astroList = ['earth', 'moon', 'sun', 'mars', 'jupiter'];

  return (
    <View>
      <Button title="Escolher Astro" onPress={() => setModalVisible(true)} />
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Escolha um Astro</Text>
            {astroList.map((astroItem) => (
              <TouchableOpacity 
                key={astroItem} 
                style={styles.modalOption}
                onPress={() => {
                  setAstro(astroItem);
                  setModalVisible(false); // Fecha o modal após a escolha
                }}
              >
                <Text style={styles.modalOptionText}>{astroItem.charAt(0).toUpperCase() + astroItem.slice(1)}</Text>
              </TouchableOpacity>
            ))}
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalOptionText: {
    fontSize: 18,
  },
});

export default AstroSelector;
