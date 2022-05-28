import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HistoryCard} from '../../components/HistoryCard';

import {
  Container,
  Header,
  Title,
  Content,
} from './style';
import { categories } from '../../utils/categories';

interface TransactionData {
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: string;
  color: string;
}

export function Resume() {
  const [totalByCategory, setTotalByCategory] = useState<CategoryData[]>([]);

  async function loadData() {
    const dataKey = '@finances:transaction';
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted
    .filter((expensive : TransactionData) => expensive.type === 'negative');

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if(expensive.category === category.key) {
          categorySum += Number(expensive.amount)
        }

      });

      if(categorySum > 0) {
        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total: categorySum.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
        })
      }
    });

    setTotalByCategory(totalByCategory);
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>

      <Content>
        {
          totalByCategory.map(item => (
            <HistoryCard 
              key={item.key}
              title={item.name} 
              amount={item.total} 
              color={item.color}
            />
          ))
        }
      </Content>
      
    </Container>
  )
}