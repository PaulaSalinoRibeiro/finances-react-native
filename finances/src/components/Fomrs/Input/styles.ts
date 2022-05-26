import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  background-color: ${({theme}) => theme.color.shape};
  color: ${({theme}) => theme.color.text_dark};
  padding: 16px 18px;
  border-radius: 8px;
  margin-bottom: 8px;
  width: 100%;
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
`;