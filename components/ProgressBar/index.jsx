// components/ProgressBar.js
import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBar}>
      <View style={{ ...styles.progress, width: `${progress}%` }} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progress: {
    height: '100%',
    backgroundColor: '#4caf50',
  },
});

export default ProgressBar;
