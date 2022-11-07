import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const ButtonContainer = styled.View.attrs({})`
  width: ${RFValue(305)}px;
  height: ${RFValue(28)}px;
  border: 1px solid ${({ theme }) => theme.colors.primary_light};
  border-radius: 4px;
`;

export const Button = styled(RectButton).attrs({
  activeOpacity: Number(0.12),
})`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
`;
