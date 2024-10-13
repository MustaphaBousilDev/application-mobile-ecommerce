import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native'
import React, { useRef, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const FilterSorting = () => {
  const [filtering, setFiltering] = useState(false)
  const [sorting, setSorting] = useState(false)
  // Animated value for button scaling
  const animatedValueSorting = useRef(new Animated.Value(1)).current;
  const animatedValueFiltering = useRef(new Animated.Value(1)).current;
  const handleSorting = () => setSorting(prev => !prev)
  const handleFiltering = () => setFiltering(prev => !prev)
  const buttonStyles = (isActive: boolean) => ({
    backgroundColor: isActive ? '#334155' : '#fff',
    color: isActive ? '#fff' : '#334155',
  })

  const handlePressInSorting = () => {
    Animated.spring(animatedValueSorting, {
      toValue: 0.95, // Scale down to 95%
      friction: 5,   // Control the bounciness of the spring
      tension: 50,   // Control the speed of the animation
      useNativeDriver: true,
    }).start();
  };

  // Handle press out animation for sorting
  const handlePressInFiltering = () => {
    Animated.spring(animatedValueFiltering, {
      toValue: 0.95, // Scale down to 95%
      friction: 5,
      tension: 50,
      useNativeDriver: true,
    }).start();
  };
  // Handle press in animation for filtering
  const handlePressOutFiltering = () => {
    Animated.spring(animatedValueFiltering, {
      toValue: 1, // Scale back to normal
      friction: 5,
      tension: 50,
      useNativeDriver: true,
    }).start();
  };
  const handlePressOutSorting = () => {
    Animated.spring(animatedValueSorting, {
      toValue: 1, // Scale back to normal
      friction: 5,
      tension: 50,
      useNativeDriver: true,
    }).start();
  };

  // Handle press out animation for filtering
  
  const renderButton = (isActive: boolean,
    label: string,
    icon: JSX.Element,
    onPress: () => void,
    animatedValue: Animated.Value, // Accept animated value as a prop
    handlePressIn: () => void,
    handlePressOut: () => void) => (
      <Animated.View style={{ transform: [{ scale: animatedValue }] }}>
        <TouchableOpacity
          style={[styles.button, buttonStyles(isActive)]}
          onPressIn={handlePressIn} // Trigger animation on press in
          onPressOut={handlePressOut} // Reset animation on press out
          onPress={onPress} // Handle button press
        >
          <Text style={{ color: buttonStyles(isActive).color }}>{label}</Text>
          <Text>{icon}</Text>
        </TouchableOpacity>
      </Animated.View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>All Features</Text>
      </View>
      <View style={styles.right}>
        {renderButton(
            sorting,
            'Sort',
            <MaterialIcons name="sort" size={22} color={buttonStyles(sorting).color} />,
            handleSorting,
            animatedValueSorting,
            handlePressInSorting,
            handlePressOutSorting
        )}
        {renderButton(
            filtering,
            'Filter',
            <AntDesign name="filter" size={22} color={buttonStyles(filtering).color} />,
            handleFiltering,
            animatedValueFiltering,
            handlePressInFiltering,
            handlePressOutFiltering
        )}
      </View>
    </View>
  )
}

export default FilterSorting

const styles = StyleSheet.create({
    container: {
       flexDirection:'row',
       justifyContent:'space-between',
       paddingVertical:8,
       alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#334155',
    },
    button:{
        flexDirection:'row',
        gap:3,
        alignItems:'center',
        
        padding:7,
        paddingVertical:4,
        borderRadius:7,
        elevation: 2, // Android shadow
        shadowColor: 'gray', // iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    left:{},
    right:{
        flexDirection:'row',
        gap:10
    },
    label:{
        fontSize:14,
        color:'#334155'
    }
})