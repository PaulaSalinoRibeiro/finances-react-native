import React from 'react';
import { MainCard } from '../../components/MainCard';
import { Container, Header, UserWrapping, UserInfo, Photo, User, Greetings, UserName, Icon } from './style';

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
      <MainCard />
    </Container>
  )
}

