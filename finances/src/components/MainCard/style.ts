import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background-color: ${({theme}) => theme.color.shape };
  width: ${RFValue(300)}px;
  border-radius: 7px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  
`;

export const Header = styled.View`

`;

export const Title = styled.Text`

`;

export const Icon = styled(Feather)`

`;

export const Footer = styled.View`

`;

export const Amount = styled.Text`

`;

export const LastTransition = styled.Text`

`;