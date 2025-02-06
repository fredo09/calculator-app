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
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 100
    },
    button: {
        height: 80,
        width: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.textPrimary,
        fontSize: 30,
        padding: 10,
        fontFamily: 'SpaceMono',
        fontWeight: '300'
    }
})