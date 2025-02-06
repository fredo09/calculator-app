import React from 'react';
import { Pressable, Text } from 'react-native';

import { globalStyles } from '@/styles/global.styles';
import { Colors } from '@/constants/Colors';

interface Props {
  label: string;
  color?: string;
  dobleSize?: boolean;
  blackText?: boolean;

  // Methods
  onPress: () => void;
}

export const CalculatorButton = ({ label, onPress, blackText = false, dobleSize = false, color = Colors.darkGray }: Props) => {
    return (
        <Pressable style={({ pressed }) => ({
            ...globalStyles.button,
            backgroundColor: color,
            opacity: pressed ? 0.5 : 1,
            width: dobleSize ? 180 : 80,
        })} onPress={onPress}>
            <Text 
                style={{
                    ...globalStyles.buttonText,
                    color: blackText ? 'black' : 'white',
                }}>
                    {label}
            </Text>
        </Pressable>
    );
}