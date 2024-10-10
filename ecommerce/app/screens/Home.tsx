import {
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
} from 'react-native'
import React, { useMemo } from 'react'


import { Header as HeaderHome } from '@/components/home/Header'
import {Search as SearchComponent} from '@/components/Search/Search';
const HomeScreen = () => {
    const MemoizedHeader = useMemo(() => <HeaderHome />, [])
    const MemoizedSearchComponent = useMemo(() => <SearchComponent />, [])
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <FlatList
              data={[]}
              renderItem={null}
              ListHeaderComponent={MemoizedHeader}
              ListFooterComponent={MemoizedSearchComponent}
              contentContainerStyle={styles.container}
              keyExtractor={() => 'static-list'}
            />
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
  