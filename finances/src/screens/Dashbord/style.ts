import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background}
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.color.primary};
  width: 100%;
  height: ${RFPercentage(42)}px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const UserWrapping = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight()}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const Greetings = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.color.shape};
  font-size:${RFValue(18)}px
`;

export const UserName = styled.Text`
font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.color.shape};
  font-size:${RFValue(18)}px
`;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.color.secondary};
  font-size: ${RFValue(24)}px;
`;

export const MainCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingHorizontal: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(32)}px;

`;