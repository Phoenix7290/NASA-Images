import { View, Image, Text } from "react-native";

const DetailsScreen = ({ route }) => {
  const { image } = route.params;

  return (
    <View>
      <Image
        source={{ uri: image.href }}
        style={{ width: "100%", height: 300 }}
      />
      <Text>{image.data[0].title}</Text>
      <Text>{image.data[0].description}</Text>
    </View>
  );
};

export default DetailsScreen;
