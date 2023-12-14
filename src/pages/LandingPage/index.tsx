import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Logo, Image, Title, Description} from './styles';
import GoalKeeperImg from '../../assets/goalKeeper.png';
import Button from '../../components/Button';

export default function LandingPage() {
  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />

      <Container colors={['#2E8251', 'rgba(46, 130, 81, 0)']}>
        <Logo>
          Kick.<Logo dark>it</Logo>
        </Logo>

        <Image source={GoalKeeperImg} />

        <Title>Soccer products with great prices</Title>
        <Description>
          Click the button below to access our catalogue of the best
          professional soccer products
        </Description>

        <Button>View products</Button>
      </Container>
    </>
  );
}
