import React, { Suspense, useCallback } from 'react';
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View, ViewStyle } from 'react-native';
const AntDesign = React.lazy(() => import('@expo/vector-icons/AntDesign'));
const Ionicons = React.lazy(() => import('@expo/vector-icons/Ionicons'));
type TabType = {
  name: string;
  label?: string | null;
  icon: React.ComponentType<any>;
  iconName: string;
  style: keyof StylesType;
};
const tabs: TabType[] = [
  {
    name: 'index',
    label: 'Home',
    icon: AntDesign,
    iconName: 'home',
    style: 'tabBarChildHome' as keyof typeof styles,
  },
  {
    name: 'Search',
    label: 'Search',
    icon: AntDesign,
    iconName: 'search1',
    style: 'tabBarChildSearch' as keyof typeof styles,
  },
  {
    name: 'Cart',
    icon: Ionicons,
    iconName: 'cart-outline',
    style: 'tabBarChildCartShopping' as keyof typeof styles,
    label: null, // no label for this tab
  },
  {
    name: 'Favourite',
    label: 'Favourite',
    icon: Ionicons,
    iconName: 'heart-outline',
    style: 'tabBarChildFavourite' as keyof typeof styles,
  },
  {
    name: 'User',
    label: 'Profile',
    icon: AntDesign,
    iconName: 'user',
    style: 'tabBarChildUser' as keyof typeof styles,
  },
];



interface MemoizationPropsTabs {
  tab: {
    name: string;
    icon: React.ComponentType<any>; // Adjust this as needed for the icon component type
    iconName: string;
    style: keyof StylesType; // This should match the styles defined earlier
  };
  color: string;
}

const MemoizedTabIcon = React.memo<MemoizationPropsTabs>(({ tab, color }) => {
  const isActive = color !== 'gray';
  const IconComponent = tab.icon;
  return (
    <Suspense  fallback={<></>}>
      <IconComponent
        name={tab.iconName as any}
        size={tab.name === 'Cart' ? 24 : 22}
        color={color}
        style={[(isActive || tab.name === 'Cart') && styles[tab.style]]}
      />
    </Suspense>
  );
});
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const handlePr = () => {
    console.log('fuck')
  }
  const renderTabBarIcon = useCallback(
    (tab: any) => ({ color }: any) => <MemoizedTabIcon tab={tab} color={color} />,
    []
  );
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle:styles.tabBarParentStyle,
        tabBarActiveBackgroundColor:'#fff',
        headerShown: useClientOnlyValue(false, true),
      }}>
      {
        tabs.map((tab, index) => (
          <Tabs.Screen key={index} name={tab.name}
            options={{
              headerShown: tab.name === 'index' ? false : true,
              tabBarIcon: renderTabBarIcon(tab),
              tabBarLabel: 
                tab.label 
                  ? tab.label 
                  : () => null,
              tabBarLabelStyle: tab.label ? { marginBottom: 3 } : null,
            }}
          />
        ))}
    </Tabs>
  );
}

type StylesType = {
  tabBarParentStyle: ViewStyle;
  tabBarChildFavourite: ViewStyle;
  tabBarChildUser: ViewStyle;
  tabBarChildHome: ViewStyle;
  tabBarChildSearch: ViewStyle;
  tabBarChildCartShopping: ViewStyle;
};
// Create the styles object
const styles: StylesType = StyleSheet.create({
  tabBarParentStyle: {
    height: 55,
    borderTopWidth: 0,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 10,
  },
  tabBarChildFavourite: {
    backgroundColor: '#ffedd5',
    padding: 6,
    marginBottom: -3,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  tabBarChildUser: {
    backgroundColor: '#ffedd5',
    padding: 6,
    marginBottom: -3,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  tabBarChildHome: {
    backgroundColor: '#ffedd5',
    padding: 8,
    marginBottom: -3,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  tabBarChildSearch: {
    backgroundColor: '#ffedd5',
    padding: 6,
    marginBottom: -3,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  tabBarChildCartShopping: {
    position: 'absolute',
    top: -30,
    color: '#fff',
    backgroundColor: '#fb923c',
    padding: 15,
    borderRadius: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});