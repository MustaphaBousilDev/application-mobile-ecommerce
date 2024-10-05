import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '@/constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  size: number;
}) {
  return <FontAwesome  style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height:55,
          borderTopWidth:0,
          position:'relative',
          // Shadow properties for iOS
          shadowColor: '#000', // Shadow color
          shadowOffset: {
            width: 1, // Horizontal offset
            height: 1, // Vertical offset
          },
          shadowOpacity: 1, // Shadow opacity
          shadowRadius: 2, // Shadow blur radius
          // Shadow properties for Android
          elevation: 10, // Elevation for Android
        },
        tabBarActiveBackgroundColor:'#fff',
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            const isActive = color !== 'gray'
            return (
              <AntDesign 
              name="home"
              size={22}
              color={color}
              style={{
                backgroundColor: isActive ? '#ffedd5' : 'transparent',
                padding: isActive ? 8 : 0,
                marginBottom: isActive ? -3 : 0,
                paddingHorizontal:isActive ? 12 : 0,
                borderRadius: isActive ? 15 : 0,
              }}
            />
            )
          },
          tabBarLabel: 'Home',
          tabBarLabelStyle:{
            marginBottom:3
          },
        }}
      />
      <Tabs.Screen
        name="two2"
        options={{
          tabBarIcon: ({ color }) => {
            const isActive = color !== 'gray'
            return (
              <AntDesign
                name="search1"
                size={22}
                color={color}
                style={{
                  backgroundColor: isActive ? '#ffedd5' : 'transparent',
                  padding: isActive ? 8 : 0,
                  marginBottom: isActive ? -3 : 0,
                  paddingHorizontal:isActive ? 12 : 0,
                  borderRadius: isActive ? 15 : 0,
                }}
            />
            )
          },
          tabBarLabel: 'Search',
          tabBarLabelStyle:{
            marginBottom:3
          }
        }}
      />
      <Tabs.Screen
        name="cartshopping"
        
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons 
              name="cart-outline"
              size={24}
              color={color}
              style={{
                position: 'absolute',
                top: -30,
                color: '#fff',
                backgroundColor: '#fb923c',
                padding: 15,
                borderRadius: 400,
                // Shadow properties for iOS
                shadowColor: '#000', // Shadow color
                shadowOffset: {
                  width: 0, // Horizontal offset
                  height: 1, // Vertical offset
                },
                shadowOpacity: 0.2, // Shadow opacity
                shadowRadius: 2, // Shadow blur radius
                // Shadow properties for Android
                elevation: 3, // Elevation for Android
              }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
      
        name="two3"
        options={{
          tabBarIcon: ({ color }) => {
            const isActive = color !== 'gray'
            return (
              <Ionicons
                name="heart-outline"
                size={24}
                color={color}
                style={{
                  backgroundColor: isActive ? '#ffedd5' : 'transparent',
                  padding: isActive ? 6 : 0,
                  
                  marginBottom: isActive ? -3 : 0,
                  paddingHorizontal:isActive ? 10 : 0,
                  borderRadius: isActive ? 15 : 0,
                }}
              />
            )
          },
          tabBarLabel: 'Favourite',
          tabBarLabelStyle:{
            marginBottom:3
          }
        }}
      />
      <Tabs.Screen
        name="two4"
        options={{
          tabBarIcon: ({ color }) => {
            const isActive = color !== 'gray'
            return (
              <AntDesign
                name="user"
                size={24}
                color={color}
                style={{
                  backgroundColor: isActive ? '#ffedd5' : 'transparent',
                  padding: isActive ? 6 : 0,
                  marginBottom: isActive ? -3 : 0,
                  paddingHorizontal:isActive ? 10 : 0,
                  borderRadius: isActive ? 15 : 0,
                }}
              />
            )
          },
          tabBarLabel: 'Profile',
          tabBarLabelStyle:{
            marginBottom:3
          }
        }}
      />
    </Tabs>
  );
}
