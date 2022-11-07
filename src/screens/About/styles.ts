import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-bottom: 18px;
`;

export const ButtonsContainer = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: ${RFValue(80)}px;
`;

export const Footer = styled.View`
  align-items: center;
`;
