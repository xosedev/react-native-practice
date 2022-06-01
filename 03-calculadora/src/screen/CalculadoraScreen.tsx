import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import { BotonCalc } from './BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

    const {numero, numeroAnterior, clean, positivoNegativo, del, btnDividir, armarNumero, btnMultiplicar, btnRestar , btnSumar, calcular} = useCalculadora()

return (
    <View style={styles.calculadoraContainer}>
        {
            (numeroAnterior !== '0') && (
                <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
            )
        }
        <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
        <View style={styles.file}>
            <BotonCalc texto="C" color="#9B9B9B" action={clean} />
            <BotonCalc texto="+/-" color="#9B9B9B" action={positivoNegativo} />
            <BotonCalc texto="del" color="#9B9B9B" action={del} />
            <BotonCalc texto="/" color="#FF9427" action={btnDividir} />
        </View>
        <View style={styles.file}>
            <BotonCalc texto="7" action={armarNumero} />
            <BotonCalc texto="8" action={armarNumero} />
            <BotonCalc texto="9" action={armarNumero} />
            <BotonCalc texto="x" color="#FF9427" action={btnMultiplicar} />
        </View>
        <View style={styles.file}>
            <BotonCalc texto="6" action={armarNumero} />
            <BotonCalc texto="5" action={armarNumero} />
            <BotonCalc texto="4" action={armarNumero} />
            <BotonCalc texto="-" color="#FF9427" action={btnRestar} />
        </View>
        <View style={styles.file}>
            <BotonCalc texto="3" action={armarNumero} />
            <BotonCalc texto="2" action={armarNumero} />
            <BotonCalc texto="1" action={armarNumero} />
            <BotonCalc texto="+" color="#FF9427" action={btnSumar} />
        </View>
        <View style={styles.file}>
            <BotonCalc texto="0" ancho action={armarNumero} />
            <BotonCalc texto="." action={armarNumero} />
            <BotonCalc texto="=" color="#FF9427" action={calcular} />
        </View>
    </View>
);
};
