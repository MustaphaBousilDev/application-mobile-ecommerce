import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const FilterSorting = () => {
  const [filtering, setFiltering] = useState(false)
  const [sorting, setSorting] = useState(false)
  const handleSorting = () => {}
  const handleFiltering = () => {}
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>All Features</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity 
          style={styles.button}
          onPress={handleSorting}
        >
            <Text>Sort</Text>
            <Text><MaterialIcons name="sort" size={22} color="black" /></Text>
        </TouchableOpacity>
        <TouchableOpacity  
          style={styles.button}
          onPress={handleFiltering}
        >
            <Text>Filter</Text>
            <Text><AntDesign name="filter" size={22} color="black" /></Text>
        </TouchableOpacity>
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
        backgroundColor:'#fff',
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