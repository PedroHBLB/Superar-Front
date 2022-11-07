import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.ongoing};
  margin-top: 7px;
`;
