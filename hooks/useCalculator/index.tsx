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
    }, [number])

    const buildNumber = (numberString: string) => {
        console.log("🚀 ~ my number: ", numberString);
        //TODO: CONSTRUIR EL NUMERO

        //! Verificar si ya existe un '.'
        if (number.includes('.') && numberString === '.') return;
        
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setNumber(number + numberString);
            }

            //Evaluar si es otro '0' y no hay punto
            if (numberString === '0' && number.includes('.')) {
                return setNumber(number + numberString);
            }

            //Evaluar si es diferente de cero y no hay punto y es el primer numero osea poner el numero y quitar el 0
            if (numberString !== '0' && !number.includes('.')) {
                return setNumber(numberString);
            }

            //Evitar 000000000.00
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
        buildNumber,
    }
}