import React from 'react';
import { Platform, View } from 'react-native';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import { globalStyles } from "@/styles/global.styles";

import * as NavigationBar from 'expo-navigation-bar';

// * is Android o Ios
const isAndroid  = Platform.OS === 'android';

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync('black');
}

const RootLayout = () => {
  //* Recuperamos el tipo de fuente para la app
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      {/* //* Cualquier ruto hija renderizalo en el layout */}
      <Slot />

      <StatusBar style="light" />
    </View>
  );
}

export default RootLayout;