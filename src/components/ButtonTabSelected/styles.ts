import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TouchableWithoutFeedback } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

type TabSelected = {
  isActive: boolean;
};

export const IconButtonContainer = styled.View<TabSelected>`
  width: 50%;
  align-items: center;

  border-bottom-width: ${({ isActive }) => (isActive ? 1 : 0)}px;
  border-bottom-color: ${({ theme }) => theme.colors.success};
`;

export const IconButton = styled(BorderlessButton).attrs({
  activeOpacity: Number(0.8),
})`
  width: 100%;

  align-items: center;
`;

export const Icon = styled(Ionicons)<TabSelected>`
  font-size: ${RFValue(25)}px;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.success : theme.colors.shape};
`;
