import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

/*nterface RouterParams {
    id: number,
    nombre: string
}*/

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{}

export const PersonaScreen = ({route, navigation}: Props) => {

    const params = route.params;

    useEffect(() => {
      navigation.setOptions({
          title: params.nombre
      });

    }, []);


  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}> Persona Screen </Text>
        <Text> Nombre { JSON.stringify(params, null, 3)} </Text>
    </View>
  );
};
