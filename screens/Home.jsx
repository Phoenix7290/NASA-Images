import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, RefreshControl, Button } from 'react-native';
import { fetchImages } from '../api/nasa'; 
import AstroSelector from '../components/AstroSelector'; 
import ProgressBar from '../components/ProgressBar'; 
import ImageItem from '../components/AstroCard'; 

const HomeScreen = ({ navigation }) => {
  const [astro, setAstro] = useState('earth'); 
  const [images, setImages] = useState([]); 
  const [page, setPage] = useState(1); 
  const [loading, setLoading] = useState(false); 
  const [refreshing, setRefreshing] = useState(false);
  const [totalItems, setTotalItems] = useState(0); 

  const loadImages = async (reset = false) => {
    if (loading) return; 
    setLoading(true);
    try {
      const data = await fetchImages(astro, reset ? 1 : page);
      if (reset) {
        setImages(data);
        setPage(2); 
      } else {
        setImages((prevImages) => [...prevImages, ...data]);
        setPage((prevPage) => prevPage + 1);
      }
      setTotalItems(1000); 
    } catch (error) {
      console.error('Erro ao carregar imagens:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadImages(true);
  }, [astro]);

  const progress = Math.min((images.length / totalItems) * 100, 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nasa Gallery</Text>

      <AstroSelector selectedAstro={astro} setAstro={setAstro} />

      <ProgressBar progress={progress} />

      <FlatList
        data={images}
        keyExtractor={(item, index) => `${item.data[0].nasa_id}-${index}`}
        renderItem={({ item }) => (
          <ImageItem item={item} navigation={navigation} />
        )}
        onEndReached={() => loadImages()}
        onEndReachedThreshold={0.5}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={() => loadImages(true)} />
        }
        ListFooterComponent={loading && <ActivityIndicator size="large" color="#0000ff" />}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});
