import React from 'react';
import { View } from 'react-native';
import { CustomText } from "@/components/CustomText";

import { globalStyles } from '@/styles/global.styles';

export default function Calculator () {
    return (
        <View style={globalStyles.calculatorContainer}>
            <CustomText variant='h1'>20 * 7</CustomText>
            <CustomText variant='h2'>100</CustomText>
        </View>
    );
}