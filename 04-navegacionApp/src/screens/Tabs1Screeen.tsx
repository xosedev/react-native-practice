import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const Tabs1Screeen = () => {

    const {top} = useSafeAreaInsets ();
useEffect(() => {
    console.log('tab 1');

}, []);

  return (
    <View style={{...styles.globalMargin, paddingTop: top}}>
        <Text style={styles.title}>
                Iconos
        </Text>

        <Icon name="rocket" size={30}  color="#900"/>
    </View>
  );
};
