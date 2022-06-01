import React from 'react';
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada} />
        <View style={styles.cajaNaranja} />
        <View style={styles.cajaVerde} />
        <View style={styles.cajaNegra} />
    </View>
  );
};
// por defect all relative position
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //width: 400,
        //height: 400,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: 'red',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom:0,
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top:0,
        right: 0,
    },
    cajaNegra: {
        width: 100,
        height: 100,
        backgroundColor: 'black',
        borderWidth: 10,
        borderColor: 'white',
        //position: 'absolute',
        ...StyleSheet.absoluteFillObject,
    },
});
