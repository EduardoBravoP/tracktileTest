/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Container,
  ProductImage,
  Price,
  Title,
  Description,
  ProductInfoWrapper,
} from './styles';

export default function ProductCard() {
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
      <ProductImage source={{uri: 'https://picsum.photos/200/300'}} />

      <ProductInfoWrapper>
        <Price>$50</Price>
        <Title>Football ball</Title>
        <Description>adidas ball</Description>
      </ProductInfoWrapper>
    </Container>
  );
}
