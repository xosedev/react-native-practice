import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colores, styles } from '../theme/appTheme';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator style={{
      paddingTop,
    }}
    sceneContainerStyle={{backgroundColor: 'white'}}  screenOptions={({ route }) => ({
      tabBarPressColor: Colores.primary,
      tabBarIcon: ({ color, focused }) => {
        let iconName: string;

        switch (route.name) {
          case 'Chat':
              iconName = 'mail-outline';
              break;
          case 'Contact':
              iconName = 'person-outline';
              break;

          case 'Albums':
              iconName = 'reorder-four-outline';
              break;
      }
      return <Icon name={ iconName } color={color} />;
    },
      tabBarIndicatorStyle: {
      backgroundColor: Colores.primary,
    }, tabBarStyle: {
      shadowColor: 'transparent',
      elevation: 0,
    }})}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
