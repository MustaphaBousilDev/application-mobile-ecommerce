import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const FilterSorting = () => {
  const [filtering, setFiltering] = useState(false)
  const [sorting, setSorting] = useState(false)
  const handleSorting = () => setSorting(prev => !prev)
  const handleFiltering = () => setFiltering(prev => !prev)
  const buttonStyles = (isActive: boolean) => ({
    backgroundColor: isActive ? '#333' : '#fff',
    color: isActive ? '#fff' : '#333',
  })
  const renderButton = (isActive: boolean, label: string, icon: JSX.Element, onPress: () => void) => (
    <TouchableOpacity
      style={[styles.button, buttonStyles(isActive)]}
      onPress={onPress}
    >
      <Text style={{ color: buttonStyles(isActive).color }}>{label}</Text>
      <Text>{icon}</Text>
    </TouchableOpacity>
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
            <MaterialIcons name="sort" 
              size={22} 
              color={buttonStyles(sorting).color} 
            />,
            handleSorting
        )}
        {renderButton(
            filtering,
            'Filter',
            <AntDesign 
              name="filter" 
              size={22} 
              color={buttonStyles(filtering).color} />,
              handleFiltering
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
        fontWeight:'bold'
    },
    button:{
        flexDirection:'row',
        gap:3,
        alignItems:'center',
        
        padding:7,
        paddingVertical:3,
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
    }
})