import styled from 'styled-components/native';
import {LogoProps} from './interface';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};

  padding: 16px 20px 0px 20px;
  margin-bottom: 32px;
`;

export const Logo = styled.Text<LogoProps>`
  font-family: ${({theme}) => theme.font.family.bold};
  color: ${({theme, dark}) =>
    dark ? theme.colors.primary_dark : theme.colors.primary};
  font-size: ${({theme}) => theme.font.sizes.mediumLarge};

  text-align: center;
`;
