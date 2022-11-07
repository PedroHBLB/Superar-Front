import styled from "styled-components/native";
import { Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";

export const Container = styled(Pressable)`
  align-items: flex-end;
  border: 0.5px solid ${({ theme }) => theme.colors.ongoing};

  margin: 3px;
`;

export const Image = styled.Image`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
`;

export const Icon = styled(FontAwesome)`
  position: absolute;
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.secondary50};

  padding-right: 5px;
`;
