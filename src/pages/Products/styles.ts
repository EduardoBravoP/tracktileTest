import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  padding: 0px 20px;
`;

export const FilterWrapper = styled.ScrollView`
  margin-top: 32px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Filter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  padding: 8px 24px;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.background};
  margin-right: 16px;
`;

export const FilterText = styled.Text`
  font-family: ${({theme}) => theme.font.family.regular};
  font-size: ${({theme}) => theme.font.sizes.base};
  color: ${({theme}) => theme.colors.text};
`;
