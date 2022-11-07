import styled from "styled-components/native";
import { StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 80%;
  height: ${RFValue(300)}px;

  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.secondary100};
`;

export const ButtonsContainer = styled.ScrollView.attrs({
  indicatorStyle: "white",
})`
  width: 100%;
  margin: 15px 0;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  padding-top: 20px;
`;
export const Button = styled(TouchableOpacity)`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ButtonTitle = styled.Text`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
