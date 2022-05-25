import React from 'react';
import { MainCard } from '../../components/MainCard';
import { Container,
  Header, 
  UserWrapping, 
  UserInfo, 
  Photo, 
  User, 
  Greetings, 
  UserName, 
  Icon,
  MainCards } from './style';

export function Dashbord() {
  return (
    <Container>
      <Header>
        <UserWrapping>
          <UserInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/89758491?v=4'}}/>
            <User>
              <Greetings>Olá,</Greetings>
              <UserName>Paula</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapping>
      </Header>
      <MainCards>
        <MainCard type='up' title='Entrada' amount='1000,00' lastTransition='Última entrada dia 23 de Maio' />
        <MainCard type='down' title='Saida' amount='500,00' lastTransition='Última entrada dia 23 de Maio' />
        <MainCard type='total' title='Total' amount='500,00' lastTransition='Última entrada dia 23 de Maio' />
      </MainCards>
    </Container>
  )
}

