import React from 'react';
import {  Text } from 'react-native';

import { Container, Header, UserWrapping, UserInfo, Photo, User, Greetings, UserName } from './style';

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
        </UserWrapping>
      </Header>
    </Container>
  )
}

