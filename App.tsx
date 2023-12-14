/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {StatusBar} from 'react-native';

import theme from './src/styles/theme';
import LandingPage from './src/pages/LandingPage';
import {ThemeProvider} from 'styled-components/native';
import {Products} from './src/pages/Products';

function App(): React.JSX.Element {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />

      <ThemeProvider theme={theme}>
        {showProducts ? (
          <Products />
        ) : (
          <LandingPage setShowProducts={setShowProducts} />
        )}
      </ThemeProvider>
    </>
  );
}

export default App;
