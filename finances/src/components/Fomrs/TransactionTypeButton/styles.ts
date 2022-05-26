import styled, {css} from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface IconProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-width: ${({isActive}) => isActive ? 0 : 1.5}px;
  border-style: solid;
  border-color: ${({theme}) => theme.color.text};
  border-radius: 8px;
  padding: 16px;

  ${({isActive, type}) => isActive && type === 'up' && css`
    background-color: ${({theme}) => theme.color.sucess_light}
  `};

  ${({isActive, type}) => isActive && type === 'down' && css`
    background-color: ${({theme}) => theme.color.attention_light}
  `};

`;

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;

  color: ${({theme, type}) => type === 'up' ? theme.color.sucess : theme.color.attention};

`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;