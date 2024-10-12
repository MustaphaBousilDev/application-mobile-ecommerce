import { View, Image, ImageStyle, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import { CustomSkeleton as SkeletonImg} from '../Skeleton/CustomSkeleton';

interface OptimizedImageProps {
    source: any; 
    style?: ImageStyle; 
    containerStyle?: ViewStyle;
  }

const OptimizedImageBackground:React.FC<OptimizedImageProps> = ({ 
  source,
  style,
  containerStyle,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={containerStyle}>
      {loading && <SkeletonImg width={50} height={50} borderRadius={300} />}
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