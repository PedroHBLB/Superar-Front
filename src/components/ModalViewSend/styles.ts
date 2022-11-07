import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  justify-content: flex-end;
`;

export const ModalWrapper = styled.View`
  width: 100%;
  height: ${RFValue(300)}px;
`;

export const Bar = styled.View`
  height: ${RFValue(4)}px;
  width: ${RFValue(35)}px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;

  margin-top: 6px;

  align-self: center;
`;

export const ButtonsContainer = styled.View`
  align-items: center;

  margin-top: 16px;
`;

export const InitialDivider = styled.View`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.shape_light_opacity100};
`;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
    justifyContent: "flex-end",
  },
});
