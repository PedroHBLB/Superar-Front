import styled from "styled-components/native";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const PillarCard = styled.View`
  width: 90%;
  height: ${RFValue(500)}px;
`;

export const ButtonContainer = styled.View`
  align-items: flex-end;
  padding-right: 10px;
  padding-top: 10px;
`;

export const IconButton = styled(TouchableWithoutFeedback)`
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Entypo)`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ModalScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 10px 8px 10px 25px;
  margin-bottom: 10px;
`;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
