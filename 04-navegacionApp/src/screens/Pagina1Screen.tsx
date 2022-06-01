import { DrawerScreenProps } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {


  useEffect(() => {
      navigation.setOptions({
        headerLeft: ()=> (
          <Button
          title="Menu" onPress={()=> navigation.toggleDrawer()}
           />
        ),
      });
  }, []);



  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button title="ir pagina 2" onPress={() => navigation.navigate('Pagina2Screen')} />


      <Text>Navegar con argumento</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity style={{...styles.botonGrande, backgroundColor:'red'}} onPress={() => navigation.navigate('PersonaScreen', {
          id: 1,
          nombre: 'pepe',
        })}>
          <Icon name="home" color='white' size={30} />
          <Text style={styles.botonGrandeTexto}>Pepe</Text>
        </TouchableOpacity>


        <TouchableOpacity  style={{...styles.botonGrande, backgroundColor:'orange'}}  onPress={() => navigation.navigate('PersonaScreen', {
          id: 2,
          nombre: 'maria',
        })}>
          <Icon name="home" color='white' size={30} />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>

      </View>



    </View>
  );
};
