import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const FilterSorting = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.title}>All Features</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.button}>
            <Text>Sort</Text>
            <Text><MaterialIcons name="sort" size={22} color="black" /></Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.button}>
            <Text>Filter</Text>
            <Text>df</Text>
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
       paddingVertical:5,
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
        backgroundColor:'red',
        padding:5,
        paddingVertical:2,
        borderRadius:7
    },
    left:{},
    right:{
        flexDirection:'row',
        gap:10
    }
})