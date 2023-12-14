import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  border-radius: 20px;
  padding: 12px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchInput = styled.TextInput`
  margin-left: 16px;
  flex: 1;
  height: 100%;
  padding: 0px;
  padding-right: 16px;
  color: ${({theme}) => theme.colors.text};
  background-color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.font.family.regular};
  font-size: ${({theme}) => theme.font.sizes.base};
`;

export const ClearSearchButton = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.description};
  padding: 2px;
  border-radius: 20px;
`;
