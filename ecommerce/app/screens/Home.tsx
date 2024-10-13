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
import React, { lazy, Suspense, useCallback } from 'react'
import { CustomSkeleton as SkeletonHome } from '@/components/Skeleton/CustomSkeleton';
const HeaderHome = lazy(() => import('@/components/home/Header'));
const SearchComponent = lazy(() => import('@/components/Search/Search'));
const FilterSortingComponent = lazy(() => import('@/components/home/FilterSorting'))

// Memoized components to avoid unnecessary re-renders
const MemoizedHeaderHome = React.memo(HeaderHome);
const MemoizedSearchComponent = React.memo(SearchComponent);
const MemoizedFilterSortingComponent = React.memo(FilterSortingComponent);


const HomeScreen = () => {
    const data: any = []; // Empty data
    const hasData = data.length > 0;
  // Memoized render item function
  const renderHeader = useCallback(() => (
    <>
      <Suspense fallback={<ActivityIndicator size="small" color="#0000ff" />}>
          <MemoizedHeaderHome />
      </Suspense>
      <Suspense fallback={<ActivityIndicator size="small" color="#0000ff" />}>
          <MemoizedSearchComponent />
      </Suspense>
      <Suspense fallback={<ActivityIndicator size="small" color="#0000ff" />}>
          <MemoizedFilterSortingComponent />
      </Suspense>
    </>
  ), []);
  const renderSkeletons = () => (
    <>
        <Suspense fallback={
            <View style={{ marginTop: 40 }}>
                <SkeletonHome width={'100%'} height={50} borderRadius={5} />
            </View>
        }>
            <MemoizedHeaderHome />
        </Suspense>
        <Suspense fallback={<View style={{ marginVertical: 5 }}>
            <SkeletonHome width={'100%'} height={50} borderRadius={5} />
        </View>}>
            <MemoizedSearchComponent />
        </Suspense>
        <Suspense fallback={<View style={{ marginVertical: 5 }}>
            <SkeletonHome width={'100%'} height={50} borderRadius={5} />
        </View>}>
            <MemoizedFilterSortingComponent />
        </Suspense>
        <Text style={styles.noDataText}>No data available.</Text>
    </>
);
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
                ListHeaderComponent={renderHeader}
                ListFooterComponent={renderFilterSorting}
                keyExtractor={() => 'static-list'}
                contentContainerStyle={styles.container}
                removeClippedSubviews={true} //optimize memory usage
                initialNumToRender={5} //render first 5 items initialy
              />
            ) : (renderSkeletons())}
          </View>
        </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#f8fafc',
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
  