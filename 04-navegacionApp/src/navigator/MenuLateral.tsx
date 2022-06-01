import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={
      (props) => <MenuInterno {...props}/>
    }>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ( {navigation }: DrawerContentComponentProps ) => {
  return (<DrawerContentScrollView >
      <View style={styles.avatarContainer}>
        <Image  style={styles.avatar} source={{uri: 'https://cdn.dribbble.com/users/668360/screenshots/3554375/placeholder-male-800x600.gif'}}  />
      </View>

      <View style={styles.menuContainer}>

        <TouchableOpacity  style={styles.menu} onPress={()=> navigation.navigate('Tabs')}>
            <Icon name="home" color='black' size={20} />
            <Text style={styles.menuText}>Navegacion Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.menu}  onPress={()=> navigation.navigate('SettingsScreen')}>
        <Icon name="home" color='black' size={20} />
        <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>

      </View>
     </DrawerContentScrollView>);
};
