import { useState, useRef } from "react";

export const useCalculadora = () => {

    enum Operadores {
        sumar, restar, multiplicar, dividir
    }

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');
    const ultimaOperacion = useRef<Operadores>()


    const clean = () => {
        setNumero('0');
        setNumeroAnterior('0')
    };

    const armarNumero = (numeroTexto: string) => {
        //verificar si existe un punto decimal, no aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') { return; }

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
                //si es otrto cero y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
                // numero es defirente de 0 y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
                //evitar los 000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
            } else {
                setNumero(numero + numeroTexto);
            }
        } else {
            setNumero(numero + numeroTexto);
        }

    };


    const positivoNegativo = (numeroTexto: string) => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }

    };

    const del = (numeroTexto: string) => {
        if (numero.length === 2 && numero.includes('-')) {
            setNumero('-0');
        } else if (numero.length === 1 && !numero.includes('-')) {
            setNumero('0');
        } else {
            setNumero(numero.substring(0, numero.length - 1));
        }

        /*let negativo = '';
        let numeroTemp = numero;
        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0,-1));
        } else {
            setNumero('0');
        }*/

    };


    const cambiarNumPorAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);

        }
        setNumero('0');
    };

    const btnDividir = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.dividir
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.multiplicar
    }

    const btnRestar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.restar
    }
    const btnSumar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Operadores.sumar
    }

    const calcular = () => {
        const numero1 = Number(numero)
        const numero2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${numero1 + numero2}`)
                break;
            case Operadores.restar:
                setNumero(`${numero2 - numero1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${numero1 * numero2}`)
                break;
            case Operadores.dividir:
                setNumero(`${numero2 / numero1}`)
                break;
        }
        setNumeroAnterior('0')
    }

    return { numero, numeroAnterior, clean, positivoNegativo, del, btnDividir, armarNumero, btnMultiplicar, btnRestar, btnSumar, calcular }

}
