import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.primary};
  padding: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const TextButton = styled.Text`
  font-family: ${({theme}) => theme.font.family.medium};
  color: ${({theme}) => theme.colors.background};
  font-size: ${({theme}) => theme.font.sizes.base};
`;
