import React from 'react';
import {CustomButtonProps} from './interface';
import {Container, TextButton} from './styles';

export default function Button({children, ...rest}: CustomButtonProps) {
  return (
    <Container activeOpacity={0.8} {...rest}>
      <TextButton>{children}</TextButton>
    </Container>
  );
}
