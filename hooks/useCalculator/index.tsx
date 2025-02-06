import { useEffect, useRef, useState } from "react"

enum Operator {
    add = '+',
    subtract = '-',
    multiply = 'x',
    divide = '÷'
}

export const useCalculator = () => {
    const [ formula, setFormula ] = useState('0');

    const [ number, setNumber ] = useState('0');
    const [ prevNumber, setPrevNumber ] = useState('0');

    //NO NECESITAMOS RENDERIZAR EL COMPONENTE
    const lastOperation = useRef<Operator>();

    useEffect(() => {
        setFormula(number)
    }, [number]);

    const clean = () => {
        setNumber('0');
        setPrevNumber('0')
        setFormula('0');

        lastOperation.current = undefined;
    }

    const toggleSing = () => {
        if (number.includes('-')) {
            return setNumber(number.replace('-', ''))
        }

        setNumber(`-${number}`);
    }

    const deleteLastNumber = () => {
        let currentSing = '';
        let temporalNumber = number;

        if (number.includes('-')) {
            currentSing = '-';
            temporalNumber = number.substring(1);
        }

        if (temporalNumber.length > 1) {
            return setNumber(currentSing + temporalNumber.slice(0, -1));
        }

        setNumber('0');
    }

    const buildNumber = (numberString: string) => {
        console.log("🚀 ~ my number: ", numberString);
        //TODO: CONSTRUIR EL NUMERO

        //! Verificar si ya existe un '.' y no mete otro
        if (number.includes('.') && numberString === '.') return;
        
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            //! Evaluar si es otro '0' y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            //! Evaluar si es diferente de cero y no hay punto y es el primer numero osea poner el numero y quitar el 0
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            //! Evitar 000000000.00
            if (numberString === '0' && !number.includes('.')) return;
        }

        setNumber(number + numberString);
    }

    return {
        // * Props
        formula,
        number,
        prevNumber,

        // * Methods
        deleteLastNumber,
        buildNumber,
        toggleSing,
        clean
    }
}