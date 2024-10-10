import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { InputSearch as InputSearchHome } from '@/components/Search/InputSearch';
import Ionicons from '@expo/vector-icons/Ionicons';

const Search = () => {
    const [search, setSearch] = useState('');
  return (
    <View style={styles.searchComponent}>
        <Text style={styles.iconSearch}>
            <Ionicons name="search" size={20} color="#d4d4d8" />
        </Text>
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
        backgroundColor: '#f0f0f0',  // Custom background
        borderColor: '#ccc',  // Optional border
        borderWidth: 1,
    },
    iconSearch: {
        position:'absolute',
        zIndex:100,
        top:10,
        left:15
        
    },
})