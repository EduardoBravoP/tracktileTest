/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {ActivityIndicator, FlatList, StatusBar} from 'react-native';
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
  const [currentPage, setCurrentPage] = useState(1);

  const productsWithFilter = useMemo(() => {
    return products?.filter(product => {
      const productTitle = product.name.toLowerCase();
      const searchToLowerCase = search.toLowerCase();

      return productTitle.includes(searchToLowerCase);
    });
  }, [products, search]);

  const fetchProducts = useCallback(async () => {
    console.log(currentPage);
    let response;

    switch (selectedFilter) {
      case 'All':
        response = await fetch(
          `http://localhost:3000/allProducts?_page=${currentPage}&_limit=5`,
        );
        break;
      case 'Popular':
        response = await fetch(
          `http://localhost:3000/popularProducts?_page=${currentPage}&_limit=5`,
        );
        break;
      case 'Drop price':
        response = await fetch(
          `http://localhost:3000/dropPriceProducts?_page=${currentPage}&_limit=5`,
        );
        break;
    }

    const productsResponse = await response.json();
    setProducts(prevValue => {
      if (!prevValue || currentPage === 1) {
        return productsResponse;
      } else {
        return [...prevValue, ...productsResponse];
      }
    });
  }, [currentPage, selectedFilter]);

  const handleLoadMoreProducts = () => {
    setCurrentPage(prevValue => prevValue + 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, currentPage, selectedFilter]);

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
            onPress={() => {
              if (selectedFilter === 'All') {
                return;
              }

              setSelectedFilter('All');
              setCurrentPage(1);
            }}
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
            onPress={() => {
              if (selectedFilter === 'Popular') {
                return;
              }

              setSelectedFilter('Popular');
              setCurrentPage(1);
            }}
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
            onPress={() => {
              if (selectedFilter === 'Drop price') {
                return;
              }

              setSelectedFilter('Drop price');
              setCurrentPage(1);
            }}
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
            onEndReached={handleLoadMoreProducts}
            onEndReachedThreshold={0}
          />
        ) : (
          <ActivityIndicator color={theme.colors.text} size={24} />
        )}
      </Container>
    </SafeArea>
  );
}
