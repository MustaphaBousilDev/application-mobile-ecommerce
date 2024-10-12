import { View, Text, ViewStyle, Animated, StyleSheet, DimensionValue } from 'react-native'
import React, { useEffect, useRef } from 'react'

interface SkeletonProps {
    width: DimensionValue;
    height?: number;
    borderRadius: number;
    style?: ViewStyle;
}

const CustomSkeleton: React.FC<SkeletonProps> = ({
    width= '100%',
    height= 20,
    borderRadius=5,
    style
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  useEffect(()=>{
    Animated.loop(
        Animated.sequence([
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 600,
                useNativeDriver: false,
            }),
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 600,
                useNativeDriver: false,
            }),
            
        ]),
        {
            iterations: -1, //Infinite loop
        }
    ).start()
  }, [animatedValue])
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0,1],
    outputRange: ['#cbd5e1','#e2e8f0'],
  })
  return (
    <Animated.View
      style={[
        styles.skeletonBase, // Base skeleton styles
        { 
            width, 
            height, 
            borderRadius 
        }, // Dynamic width, height, border-radius
        { backgroundColor }, // Animated background color
        style, // Additional styles passed through props
      ]}
    />
  )
}

const styles = StyleSheet.create({
    skeletonBase: {
      marginVertical: 0,
      backgroundColor: '#e0e0e0', // Default color (can be animated)
    },
  });
  

export {CustomSkeleton}