import React from 'react';
import { StyleSheet, View, Dimensions, Text, useWindowDimensions } from 'react-native';

//const { width, height } = Dimensions.get('window')

export const DimencionesScreen = () => {

    const  { width, height }  = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>
                <View style={{...styles.cajaMorada, width: width * 0.6}} />
                <View style={styles.cajaNaranja} />
            </View>
            <Text style={styles.title}> W: {width} , H: {height}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: '100%',
        height: 200,
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#E0A23B',
        height: 50,
        width: 50,
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
    },
});
