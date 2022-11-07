import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import { Entypo, Feather } from "@expo/vector-icons";
import theme from "../../global/styles/theme";
import { BorderlessButton } from "react-native-gesture-handler";

const { secondary100, secondary50 } = theme.colors;

export const Container = styled(LinearGradient).attrs({
  colors: [secondary50, secondary100],
})`
  width: 100%;
  height: ${RFValue(172)}px;
  justify-content: flex-end;
  padding: 12px;
`;

export const HeaderTitle = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
`;

export const Button = styled(BorderlessButton)`
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled(Entypo)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ConfirmIcon = styled(Feather)`
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const Hide = styled.View`
  height: ${RFValue(40)}px;
  width: ${RFValue(40)}px;
`;
