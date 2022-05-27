import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import { useNavigation } from '@react-navigation/native';

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

const schema = Yup.object(
  {
    name: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number()
    .required('Informe um valor numérico')
    .positive('O numero não pode ser negativo')
    .required('O valor é obrigatório')
  }
)

export function Register() {
  const [transactionType, setTransactionType] =useState('');
  const [openModal, setOpenModal] = useState(false);
  const [category, setCategory] =useState({ key: 'category', name: 'Categoria'});
  const { control, handleSubmit, reset, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const navigation = useNavigation();
  const dataKey = '@finances:transaction';

  function handleTransactionType(type: 'positive' | 'negative') {
    setTransactionType(type);
  }

  function handleCloseSelectCategory() {
    setOpenModal(false);
  }

  function handleOpenSelectCategory() {
    setOpenModal(true);
  }

  async function handleRegister(form: DataForm) {
    if(!transactionType) return Alert.alert('Selecione o tipo da transação');

    if(category.key === 'category') return Alert.alert('Selecione o tipo da categoria');

    const newData = {
      id: String(uuid.v4()) ,
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date()
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const transaction = data ? JSON.parse(data) : [];
      const dataFormatted = [...transaction, newData];
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
      setTransactionType('');
      setCategory({ key: 'category', name: 'Categoria'});
      reset();

      navigation.navigate('Listagem');

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
            <Field>
              <InputForm 
                name="name"
                control={control}
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
                error={errors.name && errors.name.message}
              />
              <InputForm 
                name="amount"
                control={control}
                placeholder="Preço"
                keyboardType="numeric"
                error={errors.amount && errors.amount.message}
              />
              <TransactionTypes>
                <TransactionTypeButton
                  title="Income"
                  type="up"
                  onPress={() => handleTransactionType('positive')}
                  isActive={transactionType === 'positive'}
                />
                <TransactionTypeButton
                  title="Outcome"
                  type="down"
                  onPress={() => handleTransactionType('negative')}
                  isActive={transactionType === 'negative'}
                />
              </TransactionTypes>

              <SelectCategoryButtom
                title={category.name}
                onPress={handleOpenSelectCategory}
              />
            </Field>

          <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
          
        </Form>
        <Modal visible={openModal}>
          <SelectCategory 
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategory}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}