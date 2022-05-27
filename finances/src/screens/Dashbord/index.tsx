import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';

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
  const [data, setData] = useState<DataListProps[]>([]);
  const dataKey = '@finances:transaction'

  async function loadingTransactions() {
    const response = await AsyncStorage.getItem(dataKey);
    const transaction = response ? JSON.parse(response) : [];
    
    const transactionFormatted: DataListProps[] = transaction
    .map((item: DataListProps) => {
      const amount = Number(item.amount).toLocaleString('pt-Br', {style: 'currency', currency: 'BRL'})
      const date = Intl.DateTimeFormat('pt-BR', {day: '2-digit', month: '2-digit', year: '2-digit'})
      .format(new Date(item.date))

      return {
        id: item.id,
        name: item.name,
        amount,
        type: item.type,
        category: item.category,
        date,
      }

    })

    setData(transactionFormatted);
  }
  
  useEffect(() => {
    loadingTransactions();
    // AsyncStorage.removeItem(dataKey);
  }, []);

  useFocusEffect(useCallback(() => {
    loadingTransactions();
  }, []))

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

