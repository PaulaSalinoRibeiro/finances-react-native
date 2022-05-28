import styled, {css} from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
  background-color: ${(
    {theme, type}) => type === 'total' ? theme.color.secondary : theme.color.shape };
  width: ${RFValue(300)}px;
  border-radius: 7px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(40)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme, type}) => type === 'total' ? theme.color.shape : theme.color.text_dark };
  
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;
  
  ${({type}) => type === 'up' && css`
    color: ${({theme}) => theme.color.sucess }
  `};

  ${({type}) => type === 'down' && css`
    color: ${({theme}) => theme.color.attention }
  `};
  
  ${({type}) => type === 'total' && css`
    color: ${({theme}) => theme.color.shape };
  `};

`;

export const Footer = styled.View`

`;

export const Amount = styled.Text<TypeProps>`
  color: ${({theme, type}) => type === 'total' ? theme.color.shape : theme.color.text_dark };
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;
`;

export const LastTransition = styled.Text<TypeProps>`
  color: ${({theme, type}) => type === 'total' ? theme.color.shape : theme.color.text };
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;