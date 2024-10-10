import { View, Image, ActivityIndicator, ImageStyle, ViewStyle } from 'react-native';
import React, { useState } from 'react';

interface OptimizedImageProps {
    source: any; // You can use a more specific type if you know it (e.g., { uri: string } | number for local images)
    style?: ImageStyle; // Optional style for the image
    containerStyle?: ViewStyle; // Optional style for the container view
  }

const OptimizedImageBackground:React.FC<OptimizedImageProps> = ({ source, style, containerStyle, }) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={containerStyle}>
      {loading && <ActivityIndicator size="small" color="#0000ff" />}
      <Image
        source={source}
        style={[style, { display: loading ? 'none' : 'flex' }]}
        onLoadEnd={() => setLoading(false)}
        resizeMode="cover"
      />
    </View>
  );
};

export default OptimizedImageBackground;