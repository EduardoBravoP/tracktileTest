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
import {ProductCardProps} from './interface';

export default function ProductCard({product}: ProductCardProps) {
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
      <ProductImage source={{uri: product.avatar}} resizeMode="center" />

      <ProductInfoWrapper>
        <Price>
          {product.price.toLocaleString('en-US', {
            currency: 'USD',
            style: 'currency',
          })}
        </Price>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
      </ProductInfoWrapper>
    </Container>
  );
}
