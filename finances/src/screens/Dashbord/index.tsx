import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

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
  LogoutButton,
  LoadingContainer
 } from './style';

 export interface DataListProps extends TransactionsCardsProps {
   id: string;
 };

 interface HiglightProps {
   amount: string;
   lastTransition: string;
 }

 interface HiglightData {
   entries: HiglightProps;
   expensives: HiglightProps;
   total: HiglightProps;
 }

export function Dashbord() {
  const [ isLoading, setIsLoading ] = useState(true)
  const [data, setData] = useState<DataListProps[]>([]);
  const [higlight, setHighlight] = useState<HiglightData>({} as HiglightData);
  const dataKey = '@finances:transaction';
  const theme = useTheme();

  function lastTransition(collection : DataListProps[], type: 'positive' | 'negative') {

    const lastTransition = new Date(Math.max.apply(Math, collection
      .filter((item) => item.type === 'positive')
      .map((item) => new Date(item.date).getTime())));

     return `${lastTransition.getDate()} de ${lastTransition.toLocaleString('pt-BR', {month: 'long'})}`

  }

  async function loadingTransactions() {
    const response = await AsyncStorage.getItem(dataKey);
    const transaction = response ? JSON.parse(response) : [];

    let entriesTotal = 0;
    let expensiveTotal = 0;
    
    const transactionFormatted: DataListProps[] = transaction
    .map((item: DataListProps) => {

      if(item.type === 'positive') {
        entriesTotal += Number(item.amount)
      } else {
        expensiveTotal += Number(item.amount)
      }

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

    const total = entriesTotal - expensiveTotal;

    setData(transactionFormatted);

    const lastEntries = lastTransition(transaction, 'positive');
    const lastExpensive = lastTransition(transaction, 'negative');
    const interval = `01 a ${lastExpensive} `

    setHighlight({
      entries: {
        amount: entriesTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
        lastTransition: lastEntries,
      },
      expensives: {
        amount: expensiveTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
        lastTransition: lastExpensive,
      },
      total: {
        amount: total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
        lastTransition: lastExpensive,
      } 
    });

    setIsLoading(false);
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
      
     {
       isLoading ? 
        <LoadingContainer>
          <ActivityIndicator 
            color={theme.color.primary}
            size="large"
          />
        </LoadingContainer>
        :
       <>
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
              amount={higlight.entries.amount}
              lastTransition={`Última entrada ${higlight.entries.lastTransition}`}
            />
            <MainCard 
              type='down' 
              title='Saida' 
              amount={higlight.expensives.amount}
              lastTransition={`Última saída ${higlight.expensives.lastTransition}`} 
            />
            <MainCard 
              type='total' 
              title='Total' 
              amount={higlight.total.amount} 
              lastTransition={`01 a ${higlight.expensives.lastTransition}`} 
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
       </>
     }

    </Container>
  )
}

