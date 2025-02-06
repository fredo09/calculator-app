import React from 'react';
import { View } from 'react-native';
import { CustomText } from "@/components/CustomText";

import { globalStyles } from '@/styles/global.styles';
import { CalculatorButton } from '@/components';
import { Colors } from '@/constants/Colors';

export default function Calculator () {
    return (
        <View style={globalStyles.calculatorContainer}>
            {/* View -> div */}
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <CustomText variant="h1">20 * 7</CustomText>
                <CustomText variant="h2">100</CustomText>
            </View>

            {/* Botons */}
            <View style={globalStyles.row}>
                <CalculatorButton 
                    label="C" 
                    blackText
                    color={Colors.ligthGray}
                    onPress={() => console.log("oki")}/>
                <CalculatorButton 
                    label="+/-" 
                    blackText
                    color={Colors.ligthGray}
                    onPress={() => console.log("oki")} />
                <CalculatorButton 
                    label="del" 
                    blackText
                    color={Colors.ligthGray}
                    onPress={() => console.log("oki")} />
                <CalculatorButton 
                    label="÷"
                    color={Colors.orange}
                    onPress={() => console.log("oki")} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton 
                    label="7" 
                    onPress={() => console.log("oki")}/>
                <CalculatorButton 
                    label="8" 
                    onPress={() => console.log("oki")} />
                <CalculatorButton 
                    label="9"
                    onPress={() => console.log("oki")} />
                <CalculatorButton 
                    label="x"
                    color={Colors.orange}
                    onPress={() => console.log("oki")} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton 
                    label="4" 
                    onPress={() => console.log("4")}/>
                <CalculatorButton 
                    label="5" 
                    onPress={() => console.log("5")} />
                <CalculatorButton 
                    label="6"
                    onPress={() => console.log("6")} />
                <CalculatorButton 
                    label="-"
                    color={Colors.orange}
                    onPress={() => console.log("-")} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton 
                    label="1" 
                    onPress={() => console.log("oki")}/>
                <CalculatorButton 
                    label="2" 
                    onPress={() => console.log("oki")} />
                <CalculatorButton 
                    label="3"
                    onPress={() => console.log("oki")} />
                <CalculatorButton 
                    label="+"
                    color={Colors.orange}
                    onPress={() => console.log("oki")} />
            </View>

            <View style={globalStyles.row}>
                <CalculatorButton 
                    label="0"
                    dobleSize
                    onPress={() => console.log("0")}/>
                <CalculatorButton 
                    label="." 
                    onPress={() => console.log(".")} />
                <CalculatorButton 
                    label="="
                    color={Colors.orange}
                    onPress={() => console.log("=")} />
            </View>
        </View>
    ); 
}