/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../styles/theme';
import {ClearSearchButton, Container, SearchInput} from './styles';
import {SearchBarProps} from './interface';

export function SearchBar({search, setSearch}: SearchBarProps) {
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
        onChangeText={setSearch}
        value={search}
        testID="searchBar"
      />

      {search.length > 0 && (
        <ClearSearchButton
          activeOpacity={0.8}
          onPress={() => {
            setSearch('');
          }}>
          <Icon name="x" size={10} color={theme.colors.background} />
        </ClearSearchButton>
      )}
    </Container>
  );
}
