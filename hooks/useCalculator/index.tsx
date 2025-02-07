import { useEffect, useRef, useState } from "react";

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
        if (lastOperation.current) {
            const firsFormulaPart = formula.split(' ').at(0);
            setFormula(`${firsFormulaPart} ${lastOperation.current} ${number}`);
        } else {
            setFormula(number);
        }
    }, [number])

    useEffect(() => {
        const subResult = calculateSubResult();
        setPrevNumber(`${subResult}`)
    }, [formula]);

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

    const setLastNumber = () => {
        // todo: Calculate Number
        calculateResult();

        if (number.endsWith('.')) {
            setPrevNumber(number.slice(0, -1));
        }

        setPrevNumber(number);
        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber();

        lastOperation.current = Operator.divide;
    }

    const addOperation = () => {
        setLastNumber();

        lastOperation.current = Operator.add;
    }

    const subTractOperation = () => {
        setLastNumber();

        lastOperation.current = Operator.subtract;
    }

    const multiplyOperation = () => {
        setLastNumber();

        lastOperation.current = Operator.multiply;
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

    const calculateSubResult = () => {
        const [ firstValue, operation, secondValue ] = formula.split(' ');

        const num1 = Number(firstValue);
        const num2 = Number(secondValue);

        if (isNaN(num2)) return num1;

        switch(operation) {
            case Operator.add:
                return num1 + num2;
            case Operator.subtract:
                return num1 - num2;
            case Operator.multiply:
                return num1 * num2;
            case Operator.divide:
                return num1 / num2
            
            default:
                throw new Error(`No se ha agregado el operador ${operation} a la calculadora`)
        }
    }

    const calculateResult = () => {
        const result = calculateSubResult();
        setFormula(`${result}`);

        lastOperation.current = undefined;
        setPrevNumber('0');
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
        clean,

        //* Operaionts
        divideOperation,
        multiplyOperation,
        subTractOperation,
        calculateSubResult,
        calculateResult,
        addOperation,
    }
}