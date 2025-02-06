// Global styles for calculador app

import { StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";

export const globalStyles = StyleSheet.create({
    background: {
        backgroundColor: Colors.background,
        flex: 1
    },
    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400'
    },
    subResult: {
        color: Colors.textPrimary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '300'
    }
})