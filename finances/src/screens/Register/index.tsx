import React, {useState} from 'react';
import {Modal} from 'react-native';
import { useForm } from 'react-hook-form';

import { InputForm } from '../../components/Fomrs/InputForm';
import { Button } from '../../components/Fomrs/Button';
import {TransactionTypeButton} from '../../components/Fomrs/TransactionTypeButton';
import {SelectCategoryButtom} from '../../components/Fomrs/SelectCategoryButtom';
import { Container, Header, Title, Form, Field, TransactionTypes } from './styles';

import { SelectCategory } from '../SelectCategory';

interface DataForm {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] =useState('');
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] =useState({ key: 'category', name: 'Categoria'});
  const { control, handleSubmit } = useForm();

  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleCloseSelectCategory() {
    setOpenModal(false);
  }

  function handleOpenSelectCategory() {
    setOpenModal(true);
  }

  function handleRegister(form: DataForm) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
          <Field>
            <InputForm 
              name='name'
              control={control}
              placeholder='Nome'
            />
            <InputForm 
              name='amount'
              control={control}
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

        <Button title='Enviar' onPress={handleSubmit(handleRegister)}/>
        
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