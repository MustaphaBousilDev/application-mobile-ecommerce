import {
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    FlatList,
    View,
    Text,
    ActivityIndicator,
} from 'react-native'
import React, { lazy, Suspense } from 'react'
import { CustomSkeleton as SkeletonHome } from '@/components/Skeleton/CustomSkeleton';
const HeaderHome = lazy(() => import('@/components/home/Header'));
const SearchComponent = lazy(() => import('@/components/Search/Search'));


const HomeScreen = () => {
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
                ListHeaderComponent={
                  <Suspense 
                    fallback={
                      <ActivityIndicator size="small" color="#0000ff" />
                  }>
                    <HeaderHome />
                  </Suspense>}
                ListFooterComponent={
                  <Suspense 
                    fallback={<ActivityIndicator size="small" color="#0000ff" />}>
                      <SearchComponent />
                  </Suspense>
                }
                keyExtractor={() => 'static-list'}
                contentContainerStyle={styles.container}
              />
            ) : (
              <>
                <Suspense fallback={
                  <View style={{marginTop:40}}>
                    <SkeletonHome width={'100%'} height={50} borderRadius={5} />
                  </View>
                }>
                  <HeaderHome />
                </Suspense>
                <Suspense fallback={<View style={{marginVertical:5}}>
                  <SkeletonHome width={'100%'} height={50} borderRadius={5} />
                  </View>}>
                  <SearchComponent />
                </Suspense>
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
  