import React, {useState} from 'react';
import { Input } from '../../components/Fomrs/Input';
import { Button } from '../../components/Fomrs/Button';
import {TransactionTypeButton} from '../../components/Fomrs/TransactionTypeButton';

import { Container, Header, Title, Form, Field, TransactionTypes } from './styles';


export function Register() {
  const [transactionType, setTransactionType] =useState('');

  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
          <Field>
            <Input 
              placeholder='Nome'
            />
            <Input 
              placeholder='Preço'
            />
            <TransactionTypes>
              <TransactionTypeButton
                title='Income'
                type='up'
                onPress={() => handleTransactionType('up')}
                isActive={transactionType === 'up'}
              />
              <TransactionTypeButton
                title='Outcome'
                type='down'
                onPress={() => handleTransactionType('down')}
                isActive={transactionType === 'down'}
              />
            </TransactionTypes>
          </Field>

        <Button title='Enviar' />
        
      </Form>

    </Container>
  )
}