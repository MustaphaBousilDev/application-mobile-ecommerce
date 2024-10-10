import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState, Suspense } from 'react';
import { HomeProvider } from '@/components/home/HomeContext';

const HomeScreen = React.lazy(() => import('../screens/Home')); // Lazy load HomeScreen

export default function Home() {
  const [error, setError] = useState<string | null>(null);

  // No need for separate state to hold HomeScreen since it's lazy loaded
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  return (
    <HomeProvider>
      <Suspense fallback={
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="red" />
        </View>
      }>
        <HomeScreen />
      </Suspense>
    </HomeProvider>
  );
}
