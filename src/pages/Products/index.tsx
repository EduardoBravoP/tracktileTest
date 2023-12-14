/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, StatusBar, Text} from 'react-native';
import {Header} from '../../components/Header';
import theme from '../../styles/theme';
import {
  SafeArea,
  Container,
  FilterWrapper,
  Filter,
  FilterText,
  SearchBarWrapper,
} from './styles';
import {SearchBar} from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard';
import {ProductProps, SelectedFilterProps} from './interface';

export function Products() {
  const [products, setProducts] = useState<ProductProps[] | null>(null);
  const [selectedFilter, setSelectedFilter] =
    useState<SelectedFilterProps>('All');
  const [search, setSearch] = useState('');

  const productsWithFilter = useMemo(() => {
    return products?.filter(product => {
      const productTitle = product.name.toLowerCase();
      const searchToLowerCase = search.toLowerCase();

      return productTitle.includes(searchToLowerCase);
    });
  }, [products, search]);

  const handleChangeFilter = useCallback(
    async (filterPressed: SelectedFilterProps) => {
      if (selectedFilter === filterPressed) {
        return;
      }

      setSelectedFilter(filterPressed);

      let response;

      switch (filterPressed) {
        case 'All':
          response = await fetch('http://localhost:3000/allProducts');
          break;
        case 'Popular':
          response = await fetch('http://localhost:3000/popularProducts');
          break;
        case 'Drop price':
          response = await fetch('http://localhost:3000/popularProducts');
          break;
      }

      const productsResponse = await response.json();
      setProducts(productsResponse);
    },
    [selectedFilter],
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:3000/allProducts');
      const productsResponse = await response.json();

      setProducts(productsResponse);
    };

    fetchProducts();
  }, []);

  return (
    <SafeArea>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="dark-content"
      />
      <Header />

      <Container>
        <SearchBarWrapper>
          <SearchBar search={search} setSearch={setSearch} />
        </SearchBarWrapper>

        <FilterWrapper
          horizontal
          contentContainerStyle={{
            paddingBottom: 24,
            paddingLeft: 4,
          }}>
          <Filter
            onPress={() => handleChangeFilter('All')}
            selected={selectedFilter === 'All'}
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
            <FilterText selected={selectedFilter === 'All'}>All</FilterText>
          </Filter>
          <Filter
            onPress={() => handleChangeFilter('Popular')}
            selected={selectedFilter === 'Popular'}
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
            <FilterText selected={selectedFilter === 'Popular'}>
              Popular
            </FilterText>
          </Filter>
          <Filter
            onPress={() => handleChangeFilter('Drop price')}
            selected={selectedFilter === 'Drop price'}
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
            <FilterText selected={selectedFilter === 'Drop price'}>
              Drop price
            </FilterText>
          </Filter>
        </FilterWrapper>

        {products ? (
          <FlatList
            data={productsWithFilter}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={({id}) => `${id}`}
            renderItem={({item}) => <ProductCard product={item} />}
            contentContainerStyle={{
              backgroundColor: theme.colors.background,
              paddingBottom: 250,
              paddingHorizontal: 20,
            }}
          />
        ) : (
          <Text>TODO: carregando...</Text>
        )}
      </Container>
    </SafeArea>
  );
}
