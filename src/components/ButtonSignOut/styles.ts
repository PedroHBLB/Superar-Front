import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const SignOutButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.success};
  font-size: ${RFValue(25)}px;
`;

export const ModalWrapper = styled.View`
  width: 80%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.secondary100};
  border-radius: 15px;

  justify-content: space-between;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 5px;
`;

export const Description = styled.Text`
  width: 100%;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 5px;
`;

export const Options = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`;

export const ModalButton = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
`;

export const ButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const styles = StyleSheet.create({
  modal: {
    justifyContent: "center",
    alignItems: "center",
  },
});
