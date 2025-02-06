import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '@/styles/global.styles';

export default function Calculator () {
    return (
        <View style={globalStyles.calculatorContainer}>
            <Text style={globalStyles.mainResult}>20 * 7</Text>
            <Text style={globalStyles.subResult}>100</Text>
        </View>
    );
}