import React from 'react';
import {ButtonProps} from './interface';
import {Container, TextButton} from './styles';

export default function Button({children}: ButtonProps) {
  return (
    <Container activeOpacity={0.8}>
      <TextButton>{children}</TextButton>
    </Container>
  );
}
