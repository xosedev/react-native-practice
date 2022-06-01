import React from 'react'
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={ styles.container}>
        <View style={ styles.cajaRoja}></View>
        <View style={ styles.cajaverde}></View>
        <View style={ styles.cajaAmarilla}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    cajaRoja: {
        //flex: 2,
        backgroundColor: 'red',
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',

    },
    cajaverde: {
        //flex: 2,
        backgroundColor: 'green',
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
        top: 50
    
    },
    cajaAmarilla: {
        //flex: 4,
        backgroundColor: 'yellow',
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: 'white',
    }
});