import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TransationProps {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  background-color: ${({theme}) => theme.color.shape };
  padding:  17px 24px;
  border-radius: 7px;
  margin-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const Amount = styled.Text<TransationProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: 2px;
  color: ${({theme, type}) => type === 'positive' ? theme.color.sucess : theme.color.attention};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({theme}) => theme.color.text};
`;
export const CategoryName = styled.Text`
  color: ${({theme}) => theme.color.text};
  font-size: ${RFValue(14)}px;
  margin-left: 17px;
`;

export const Date = styled.Text`
  color: ${({theme}) => theme.color.text};
  font-size: ${RFValue(14)}px;
`;
