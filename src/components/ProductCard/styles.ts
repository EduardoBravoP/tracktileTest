import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 20px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100%;
  border-radius: 20px 20px 0px 0px;
`;

export const Price = styled.Text`
  font-family: ${({theme}) => theme.font.family.regular};
  font-size: ${({theme}) => theme.font.sizes.base};
  color: ${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.font.family.regular};
  font-size: ${({theme}) => theme.font.sizes.base};
  color: ${({theme}) => theme.colors.text};
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.font.family.regular};
  font-size: ${({theme}) => theme.font.sizes.extraSmall};
  color: ${({theme}) => theme.colors.description};
`;

export const ProductInfoWrapper = styled.View`
  padding: 8px 16px;
  gap: 8px;
`;
