/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../styles/theme';
import {Container, SearchInput} from './styles';

export function SearchBar() {
  return (
    <Container
      style={{
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
          height: 2,
          width: 0,
        },
        shadowRadius: 20,
        shadowOpacity: 0.2,
        elevation: 20,
      }}>
      <Icon name="search" size={24} color={theme.colors.description} />

      <SearchInput
        placeholder="Search products"
        placeholderTextColor={theme.colors.description}
      />
    </Container>
  );
}
