import {
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
    View,
    Text,
} from 'react-native'
import React, { useMemo } from 'react'
import { Header as HeaderHome } from '@/components/home/Header'
import {Search as SearchComponent} from '@/components/Search/Search';
const HomeScreen = () => {
    const MemoizedHeader = useMemo(() => <HeaderHome />, [])
    const MemoizedSearchComponent = useMemo(() => <SearchComponent />, [])
    const data: any = []; // Empty data
    const hasData = data.length > 0;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            {hasData ? (
              <FlatList
                data={data}
                renderItem={null}
                ListHeaderComponent={MemoizedHeader}
                ListFooterComponent={MemoizedSearchComponent}
                keyExtractor={() => 'static-list'}
                contentContainerStyle={styles.container}
              />
            ) : (
              <>
                {MemoizedHeader}
                {MemoizedSearchComponent}
                <Text style={styles.noDataText}>No data available.</Text>
              </>
            )}
          </View>
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
    noDataText: {
      textAlign: 'center',
      marginTop: 20,
      color: '#555',
    },
  });
  