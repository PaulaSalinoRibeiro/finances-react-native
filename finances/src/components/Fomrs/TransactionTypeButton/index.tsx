import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';

const icons ={
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

interface Props extends RectButtonProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransactionTypeButton({title, type, isActive, ...rest} : Props) {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={icons[type]} type={type}/>
      <Title>{title}</Title>

    </Container>
  )
}