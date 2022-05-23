import React from 'react';
import { Container, Header, Title, Icon, Footer, Amount, LastTransition } from './style';

export function MainCard() {
  return (
    <Container>
      <Header>
        <Title>
          Entrada
        </Title>
        <Icon name="arrow-up-circle"/>
      </Header>
      <Footer>
        <Amount>
          R$ 1000,00
        </Amount>
        <LastTransition>
          Última entrada dia 23 de Maio
        </LastTransition>
      </Footer>
    </Container>
  )
}