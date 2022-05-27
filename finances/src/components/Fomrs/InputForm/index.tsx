import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { Container } from './styles';

import { Input } from '../Input';

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export function InputForm({control, name, ...rest}: Props){
  return (
    <Container>
      <Controller 
        control={control}
        name={name}
        render={({field: {onChange, value}}) => 
          (<Input {...rest} onChangeText={onChange} value={value}/>)}
      />
    </Container>
  )
}