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
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            })
        ])
    ).start()
  }, [animatedValue])
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0,1],
    outputRange: ['#e0e0e0','#c0c0c0'],
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
      marginVertical: 5,
      backgroundColor: '#e0e0e0', // Default color (can be animated)
    },
  });
  

export {CustomSkeleton}