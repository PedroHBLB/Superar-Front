import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

type ButtonProps = {
  enabled: boolean;
};

export const ButtonContainer = styled(RectButton)<ButtonProps>`
  width: 100%;
  height: ${RFValue(56)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, enabled }) =>
    enabled ? theme.colors.primary : theme.colors.primary_light};
  border-radius: 8px;
`;
export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
