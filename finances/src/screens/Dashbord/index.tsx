import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper'; 
import { MainCard } from '../../components/MainCard';
import { TransactionsCards } from '../../components/TransactionsCards';
import { 
  Container,
  Header, 
  UserWrapping, 
  UserInfo, 
  Photo, 
  User, 
  Greetings, 
  UserName, 
  Icon,
  MainCards,
  Transactions, 
  Title,
  TransactionList
 } from './style';

export function Dashbord() {
  const data = [
    {
    title: 'Desenvolvimento de site',
    amount: '12000,00',
    category : {
      name: 'Vendas',
      icon: 'dollar-sign'
      },
    date: '25/05/2022',
    },
    {
      title: 'Desenvolvimento de site',
      amount: '12000,00',
      category : {
        name: 'Vendas',
        icon: 'dollar-sign'
        },
      date: '25/05/2022',
      },
      {
        title: 'Desenvolvimento de site',
        amount: '12000,00',
        category : {
          name: 'Vendas',
          icon: 'dollar-sign'
          },
        date: '25/05/2022',
        },
        {
          title: 'Desenvolvimento de site',
          amount: '12000,00',
          category : {
            name: 'Vendas',
            icon: 'dollar-sign'
            },
          date: '25/05/2022',
          },
  ];

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
        <MainCard 
          type='up' 
          title='Entrada' 
          amount='1000,00' 
          lastTransition='Última entrada dia 23 de Maio' 
        />
        <MainCard 
          type='down' 
          title='Saida' 
          amount='500,00' 
          lastTransition='Última entrada dia 23 de Maio' 
        />
        <MainCard 
          type='total' 
          title='Total' 
          amount='500,00' 
          lastTransition='Última entrada dia 23 de Maio' 
        />
      </MainCards>

      <Transactions>
        <Title>Listagem</Title>
        
        < TransactionList
          data={data}
          renderItem={({item}) => <TransactionsCards data={item}/>}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBotton: getBottomSpace()
          }}
        />

        
      </Transactions>

    </Container>
  )
}

