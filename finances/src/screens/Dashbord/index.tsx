import React from 'react';
import { MainCard } from '../../components/MainCard';
import { TransactionsCards, TransactionsCardsProps } from '../../components/TransactionsCards';
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
  TransactionList,
  LogoutButton
 } from './style';

 export interface DataListProps extends TransactionsCardsProps {
   id: string;
 };

export function Dashbord() {
  const data : DataListProps[] = [
    {
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12000,00',
    category : {
      name: 'Vendas',
      icon: 'dollar-sign'
      },
    date: '25/05/2022',
    },
    {
    id: '2',
    type: 'negative',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12000,00',
    category : {
      name: 'Vendas',
      icon: 'dollar-sign'
      },
    date: '25/05/2022',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12000,00',
      category : {
        name: 'Vendas',
        icon: 'dollar-sign'
        },
      date: '25/05/2022',
    },
    {
      id: '4',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12000,00',
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

          <LogoutButton onPress={()=>{}}>
            <Icon name="power" />
          </LogoutButton>

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
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionsCards data={item}/>}
        />

        
      </Transactions>

    </Container>
  )
}

