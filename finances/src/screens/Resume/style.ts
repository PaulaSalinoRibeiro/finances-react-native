import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.background};
`;

export const Header = styled.View`
  background-color: ${({theme}) => theme.color.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.color.shape};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(18)};
`;

export const Content = styled.ScrollView.attrs(
  {
    contentContainerStyle : {
      padding: 24,
      flex: 1,
    }
  }
)`

`;