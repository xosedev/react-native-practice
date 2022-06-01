import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {
  const navigation = useNavigation()


  useEffect(() => {
    navigation.setOptions({
      title: 'hola mundo',
      headerBackTitle: 'Atras'
    })
  }, [])
  

  return (
    <View style={ styles.globalMargin}>
      <Text style={ styles.title}>Pagina2Screen</Text>
      <Button title="ir pagina 3" onPress={()=> navigation.navigate('Pagina3Screen')} />
    </View>
  );
};
