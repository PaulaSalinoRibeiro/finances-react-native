import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import theme from './src/global/styles/theme';
import {SelectCategory} from './src/screens/SelectCategory';

export default function App() {
  const [fontsLoading] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoading) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <SelectCategory/>
    </ThemeProvider>
  );
}


