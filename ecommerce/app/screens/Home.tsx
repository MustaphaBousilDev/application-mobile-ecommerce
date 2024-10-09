import { StyleSheet, ScrollView, TextInput, View, Text } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Header as HeaderHome } from '@/components/home/Header'
const HomeScreen = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <HeaderHome/>
        <View style={styles.searchComponent}>
            <Text style={styles.iconSearch}>
                <Ionicons name="search" size={20} color="#d4d4d8" />
            </Text>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Type here..."
                placeholderTextColor="#888"
                keyboardType="default"
                returnKeyType="done"
                onSubmitEditing={() => console.log('Input submitted:', inputValue)} // Action on submit
            />
        </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fafaf9',
      padding:10,
      paddingHorizontal:15
    },
    input: {
        width: '100%',
        height: 44,
        borderRadius: 5,
        paddingHorizontal: 40,
        backgroundColor: '#fff',
        elevation: 2, // For Android shadow
        shadowColor: '#000', // iOS shadow color
        shadowOffset: {
            width: 0, // Horizontal shadow offset
            height: 2, // Vertical shadow offset
        },
        shadowOpacity: 0.1, // Shadow opacity
        shadowRadius: 4, // Shadow blur radius
    },
    icon: {
        paddingHorizontal: 5, // Padding around icons
    },
    iconSearch: {
        position:'absolute',
        zIndex:100,
        top:10,
        left:15
        
    },
    searchComponent:{position:'relative'}
  });
  