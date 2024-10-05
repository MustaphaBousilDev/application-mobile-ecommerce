import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

const Splashing = () => {
    return (
        <View style={styles.splashContainer}>
          <Image
            style={styles.logoSplashing}
            source={require('../../assets/images/splashingLogo.png')} // Local image
          />
          <ActivityIndicator size="small" color="#ffffff" />
        </View>
      );
}

export {Splashing}

const styles = StyleSheet.create({
    splashContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.splashing.background, // Custom background color
    },
    splashText: {
      fontSize: 24,
      color: '#fff',
      marginBottom: 20,
    },
    logoSplashing: {
      width:80,
      height:80
    }
  });