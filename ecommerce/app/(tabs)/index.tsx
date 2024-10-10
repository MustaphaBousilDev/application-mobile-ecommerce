import { View, Text, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react'
export default function Home() {
  const [HomeScreen, setHomeScreen] = useState<React.ComponentType<any> | null>(null);
  useEffect(() => {
    const loadHomeScreen = async () => {
      try {
        const LoadedHomeScreen = (await import('../screens/Home')).default;
        setHomeScreen(() => LoadedHomeScreen); // Set the loaded component
      } catch (error) {
        console.error("Error loading HomeScreen:", error);
      }
    };

    // Trigger loading of the screen when the component mounts
    loadHomeScreen();
  }, []); // Empty dependency array to ensure it only runs once on mount
  if (!HomeScreen) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }
  return <HomeScreen/>
}