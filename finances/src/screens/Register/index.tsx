import React, {useState} from 'react';
import {Modal} from 'react-native';

import { Input } from '../../components/Fomrs/Input';
import { Button } from '../../components/Fomrs/Button';
import {TransactionTypeButton} from '../../components/Fomrs/TransactionTypeButton';
import {SelectCategoryButtom} from '../../components/Fomrs/SelectCategoryButtom';
import { Container, Header, Title, Form, Field, TransactionTypes } from './styles';

import { SelectCategory } from '../SelectCategory';

export function Register() {
  const [transactionType, setTransactionType] =useState('');
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] =useState({
    key: 'category',
    name: 'Categoria'
  });

  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleCloseSelectCategory() {
    setOpenModal(false);
  }

  function handleOpenSelectCategory() {
    setOpenModal(true);
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

            <SelectCategoryButtom
              title={category.name}
              onPress={handleOpenSelectCategory}
            />
          </Field>

        <Button title='Enviar' />
        
      </Form>
      <Modal visible={openModal}>
        <SelectCategory 
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategory}
        />
      </Modal>
    </Container>
  )
}