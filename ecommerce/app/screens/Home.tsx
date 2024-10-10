import {
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import React from 'react'


import { Header as HeaderHome } from '@/components/home/Header'
import {Search as SearchComponent} from '@/components/Search/Search';
const HomeScreen = () => {
    
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={styles.container}>
                <HeaderHome/>
                <SearchComponent/>
            </ScrollView>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    icon: {
        paddingHorizontal: 5, // Padding around icons
    },
  });
  