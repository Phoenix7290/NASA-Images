// components/ImageItem.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const ImageItem = ({ item, navigation }) => {
  const imageUrl = item.links?.[0]?.href || ''; // URL da imagem

  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => navigation.navigate('Details', { image: item })}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ImageItem;
