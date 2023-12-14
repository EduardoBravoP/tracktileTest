import styled from 'styled-components/native';
import {LogoProps} from './interface';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.text};
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
`;

export const Logo = styled.Text<LogoProps>`
  font-family: ${({theme}) => theme.font.family.bold};
  color: ${({theme, dark}) =>
    dark ? theme.colors.primary_dark : theme.colors.background};
  font-size: ${({theme}) => theme.font.sizes.logoLarge};

  text-align: center;
`;

export const Image = styled.Image`
  margin-top: 64px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.font.family.medium};
  color: ${({theme}) => theme.colors.background};
  font-size: ${({theme}) => theme.font.sizes.mediumLarge};

  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.font.family.regular};
  color: ${({theme}) => theme.colors.background};
  font-size: ${({theme}) => theme.font.sizes.base};

  text-align: center;
  margin-top: 24px;
  margin-bottom: 64px;
`;
