import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { InputSearch as InputSearchHome } from '@/components/Search/InputSearch';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useHome } from '../home/HomeContext';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Search = () => {
    const [search, setSearch] = useState('');
    const { isFocused, setFocus} = useHome();
    // Create an Animated.Value to handle the icon color transition
    const iconColorAnim = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        // Animate the icon color when the input is focused/unfocused
        Animated.timing(iconColorAnim, {
            toValue: isFocused ? 1 : 0, // 1 for focused, 0 for unfocused
            duration: 100, // Duration for the smooth transition
            useNativeDriver: false, // color interpolation can't use native driver
        }).start();
    }, [isFocused, iconColorAnim]);
    // Interpolate the icon color between unfocused (gray) and focused (orange)
    const iconColor = iconColorAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#d4d4d8', '#f97316'], // gray when unfocused, orange when focused
    });
    
  return (
    <View style={styles.searchComponent}>
        <Animated.Text style={[styles.iconSearch, { color: iconColor }]}>
            <Ionicons 
              name="search" 
              size={20} 
            />
        </Animated.Text>
        <Animated.Text style={[styles.iconVoice, { color: iconColor }]}>
            <MaterialIcons 
              name="keyboard-voice" 
              size={20} 
            />
        </Animated.Text>
        <InputSearchHome
            value={search}
            onChangeText={(text) => setSearch(text)}
            onSubmitEditing={() => 'Fucking Search was Submitted'}
            style={styles.customInputSearch}
            autoCapitalize='none' //Addional TextInput Prop
        />
    </View>
  )
}

export {Search}

const styles = StyleSheet.create({
    searchComponent:{position:'relative'},
    customInputSearch: {
        backgroundColor: '#fff',  // Custom background
        //borderColor: '#ccc',  // Optional border
        //borderWidth: 1,
    },
    iconSearch: {
        position:'absolute',
        zIndex:100,
        top:12,
        left:10
        
    },
    iconVoice: {
        position:'absolute',
        zIndex:100,
        top:12,
        right:10
        
    },
})