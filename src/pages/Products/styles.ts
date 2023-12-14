import styled from 'styled-components/native';
import {FilterProps} from './interface';

export const SafeArea = styled.SafeAreaView`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.background};
`;

export const SearchBarWrapper = styled.View`
  padding: 0 20px;
`;

export const FilterWrapper = styled.ScrollView`
  padding: 0 20px;
  margin-top: 32px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Filter = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<FilterProps>`
  padding: 0px 24px;
  border-radius: 20px;
  background-color: ${({theme, selected}) =>
    selected ? theme.colors.primary : theme.colors.background};
  margin-right: 16px;
  height: 35px;
  align-items: center;
  justify-content: center;
`;

export const FilterText = styled.Text<FilterProps>`
  font-family: ${({theme}) => theme.font.family.regular};
  font-size: ${({theme}) => theme.font.sizes.base};
  color: ${({theme, selected}) =>
    selected ? theme.colors.background : theme.colors.text};
`;
