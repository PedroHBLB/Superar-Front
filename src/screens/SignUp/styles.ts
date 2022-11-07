import styled, { css } from "styled-components/native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

type CheckboxProps = {
  toggleCheckBox: boolean;
};

type ModalProps = {
  isActive: boolean;
};

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;

  padding-bottom: ${getBottomSpace() + 30}px;
`;

export const BackgroundImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BackgroundImage = styled.Image``;

export const Header = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -37%;
`;

export const HeaderWrapper = styled.View`
  padding-top: 15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Divider = styled.View`
  width: 25px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.shape};

  margin-left: 1px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 24px;
`;

export const Content = styled.View`
  width: 100%;

  padding-right: 28px;
  padding-left: 28px;
`;

export const ModalContainer = styled.View<ModalProps>`
  width: 100%;
  height: ${RFValue(40)}px;
  border-width: 1px;
  border-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.shape};
  border-radius: 5px;

  margin-top: 10px;
`;

export const ModalButton = styled(RectButton)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ChosenSetor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ChosenIcon = styled(AntDesign)<ModalProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.shape};
`;

export const ButtonContainer = styled.View`
  padding-top: 5px;

  margin-bottom: 20px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: ${Platform.OS === "ios" ? 15 : 0}px;
`;

export const CkeckboxContainer = styled(RectButton)<CheckboxProps>`
  width: 22px;
  height: 22px;
  align-items: center;

  border-color: ${({ theme }) => theme.colors.shape};
  border-width: ${({ toggleCheckBox }) => (toggleCheckBox ? 0 : 2)}px;
  border-radius: 3px;
  ${({ theme, toggleCheckBox }) =>
    toggleCheckBox &&
    css`
      background-color: ${theme.colors.primary};
    `}

  margin-left: 2px;
  margin-top: 5px;
`;

export const CheckboxIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary100};
  font-size: ${RFValue(20)}px;
`;

export const CheckboxText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-left: ${Platform.OS === "ios" ? 10 : 0}px;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.ongoing};
  margin-bottom: 7px;
`;

export const Link = styled.Text`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.shape};
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
