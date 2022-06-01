import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs1Screeen } from '../screens/Tabs1Screeen';
import { Tabs2Screeen } from '../screens/Tabs2Screeen';
import { StackNavigator } from './StackNavigator';
import { Colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';


export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};


const Tab = createMaterialBottomTabNavigator();

function TabsAndroid() {
    return (
        <Tab.Navigator sceneAnimationEnabled={true} screenOptions={({ route }) => ({
            tabBarActiveTintColor: 'red',
            tabBarIcon: ({ color, focused }) => {
                let iconName: string;

                switch (route.name) {
                    case 'Tabs1Screeen':
                        iconName = 'rocket';
                        break;
                    case 'Tabs2Screeen':
                        iconName = 'home';
                        break;

                    case 'StackNavigator':
                        iconName = 'search';
                        break;
                }
                return <Icon name={ iconName } color={color} />;
            },
            tabBarStyle: {
                borderTopColor: Colores.primary,
                borderTopWidth: 0,
                elevation: 0,
            },
            tabBarLabelStyle: { fontSize: 15 },

        })}>
            <Tab.Screen options={{ title: 'Tab 1' }} name="Tabs1Screeen" component={Tabs1Screeen} />
            <Tab.Screen name="Tabs2Screeen" options={{
                title: 'Tab Top',
            }} component={TopTabNavigator} />
            <Tab.Screen name="StackNavigator" options={{
                title: 'StackNavigator',
            }} component={StackNavigator} />
        </Tab.Navigator>
    );
}




const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white',
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'red',
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string;

                    switch (route.name) {
                        case 'Tabs1Screeen':
                            iconName = 'rocket';
                            break;
                        case 'Tabs2Screeen':
                            iconName = 'home';
                            break;

                        case 'StackNavigator':
                            iconName = 'search';
                            break;
                    }
                    return <Icon name={{ iconName }} />;
                },
                tabBarStyle: {
                    borderTopColor: Colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: { fontSize: 15 },

            })}
        >
            {/* <Tab.Screen options={{
          title: 'Tab 1', tabBarIcon: (props)=>
              <Text style={{color: props.color}}>1</Text>

      }} name="Tabs1Screeen" component={Tabs1Screeen} /> */}

            <BottomTabIOS.Screen options={{ title: 'Tab 1' }} name="Tabs1Screeen" component={Tabs1Screeen} />


            <BottomTabIOS.Screen name="Tabs2Screeen" options={{
                title: 'Tab Top',
            }} component={TopTabNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{
                title: 'StackNavigator',
            }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
};
