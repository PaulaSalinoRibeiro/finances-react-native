import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import {Dashbord} from './src/screens/Dashbord';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashbord/>
    </ThemeProvider>
  );
}


