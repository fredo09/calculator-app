import React from "react";
import { Text, type TextProps } from "react-native";

import { globalStyles } from "@/styles/global.styles";

interface Props extends TextProps { //! Obtenemos todas las props de Text para personalizarlo
    variant?: 'h1' | 'h2'
}

export function CustomText({ children, variant = 'h1', ...restProps }: Props) {
    return (
        <Text style={[
            { color: "white", fontFamily: "SpaceMono" },
            variant === 'h1' && globalStyles.mainResult,
            variant === 'h2' && globalStyles.subResult
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit
            {...restProps}>
            {children}
        </Text>
    );
}
