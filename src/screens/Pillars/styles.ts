import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: space-between;

  padding-bottom: ${RFPercentage(2)}px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: ${RFValue(60)}px;
`;

export const ModalText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};

  line-height: 25px;
`;

export const Footer = styled.View`
  align-items: center;
  margin-top: ${RFValue(10)}px;
`;
