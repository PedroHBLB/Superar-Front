import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(56)}px;
  align-items: center;

  justify-content: center;

  border-color: ${({ theme }) => theme.colors.shape_light_opacity100};
  border-bottom-width: 1px;
`;

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-left: 10px;
`;
