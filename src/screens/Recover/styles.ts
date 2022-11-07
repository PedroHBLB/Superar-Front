import styled from "styled-components/native";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
`;

export const Form = styled.View`
  width: 100%;
  height: 200px;

  padding: 0 30px;
  margin-top: ${getStatusBarHeight() + 200}px;
`;

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  text-align: center;
`;

export const FormInput = styled.TextInput`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
  background-color: ${({ theme }) => theme.colors.ongoing_lightest};
  padding: ${Platform.OS === "ios" ? RFValue(10) : RFValue(5)}px 0;
  padding-left: 5px;
  border-radius: 5px;

  margin-top: 20px;
  margin-bottom: 5px;
`;

export const SubmitResponse = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  /* height: ${RFValue(15)}px; */
  color: ${({ theme }) => theme.colors.ongoing};
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const BackButton = styled(BorderlessButton)`
  position: absolute;

  margin-top: ${getStatusBarHeight() + 34}px;
  margin-left: 14px;
`;
export const Icon = styled(Ionicons)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
