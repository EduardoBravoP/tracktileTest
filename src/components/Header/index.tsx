import React from 'react';
import AvatarIcon from '../../assets/Avatar.png';
import {Image} from 'react-native';
import {Container, Logo} from './styles';

export function Header() {
  return (
    <Container>
      <Logo>
        Kick.<Logo dark>it</Logo>
      </Logo>

      <Image source={AvatarIcon} />
    </Container>
  );
}
