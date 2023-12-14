/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, Text} from 'react-native';
import {Header} from '../../components/Header';
import theme from '../../styles/theme';
import {SafeArea, Container, FilterWrapper, Filter, FilterText} from './styles';
import {SearchBar} from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard';

export function Products() {
  return (
    <SafeArea>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="dark-content"
      />
      <Header />

      <Container>
        <SearchBar />

        <FilterWrapper
          horizontal
          contentContainerStyle={{
            paddingBottom: 24,
            paddingLeft: 4,
          }}>
          <Filter
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowOffset: {
                height: 2,
                width: 0,
              },
              shadowRadius: 20,
              shadowOpacity: 0.1,
              elevation: 5,
            }}>
            <FilterText>All</FilterText>
          </Filter>
          <Filter
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowOffset: {
                height: 2,
                width: 0,
              },
              shadowRadius: 20,
              shadowOpacity: 0.1,
              elevation: 5,
            }}>
            <FilterText>Popular</FilterText>
          </Filter>
          <Filter
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowOffset: {
                height: 2,
                width: 0,
              },
              shadowRadius: 20,
              shadowOpacity: 0.1,
              elevation: 5,
            }}>
            <FilterText>Drop price</FilterText>
          </Filter>
        </FilterWrapper>

        <ProductCard />
      </Container>
    </SafeArea>
  );
}
