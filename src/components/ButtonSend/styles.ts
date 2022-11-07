import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

type ModalViewProps = {
  visible: boolean;
};

export const ButtonContainer = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export const Button = styled(RectButton).attrs({
  activeOpacity: 0.2,
})`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(30)}px;
`;

export const ModalView = styled.View<ModalViewProps>`
  flex: 1;

  ${({ visible }) =>
    visible &&
    css`
      background-color: ${({ theme }) => theme.colors.overlay};
    `};
`;
