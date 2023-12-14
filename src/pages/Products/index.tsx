import React from 'react';
import {StatusBar, Text} from 'react-native';
import {Header} from '../../components/Header';
import theme from '../../styles/theme';
import {SafeArea, Container} from './styles';

export function Products() {
  return (
    <SafeArea>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="dark-content"
      />
      <Header />

      <Container>
        <Text>Test</Text>
      </Container>
    </SafeArea>
  );
}
