import styled, { css } from "styled-components/native";
import { Platform } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput } from "react-native";

type CheckboxProps = {
  toggleCheckBox: boolean;
};

type TextInputProps = {
  type: string;
};

type ModalProps = {
  isActive: boolean;
};

export const RequestContainer = styled.View`
  flex: 1;
  padding: 39px 17px ${getBottomSpace() + 10}px 17px;

  justify-content: space-between;
`;

export const RequestContainerPillar = styled.View`
  flex: 1;
`;

export const KeyboardDismiss = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
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

export const ChosenCategory = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ChosenIcon = styled(AntDesign)<ModalProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.shape};
`;

export const Category = styled.View``;

export const CategoryTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 7px;
`;

export const CategoryName = styled.View`
  width: ${RFValue(290)}px;

  border-color: ${({ theme }) => theme.colors.primary};
  border-bottom-width: ${Platform.OS === "ios" ? 0 : 1}px;

  margin-top: ${Platform.OS === "ios" ? -15 : 0}px;
`;

export const RequestTitle = styled.TextInput`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
  background-color: ${({ theme }) => theme.colors.ongoing_lightest};
  padding: ${Platform.OS === "ios" ? RFValue(10) : RFValue(5)}px 0;
  padding-left: 5px;

  margin-top: 28px;
`;

export const Subtitle = styled.View``;

export const SubtitleTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Limit = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.shape_light_opacity100};
`;

export const SubtitleText = styled(TextInput).attrs({
  multiline: true,
  autoCorrect: false,
})<TextInputProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
  background-color: ${({ theme }) => theme.colors.ongoing_lightest};

  min-height: ${({ type }) =>
    type === "comprovante"
      ? Platform.OS === "ios"
        ? RFValue(100)
        : 0
      : Platform.OS === "ios"
      ? RFValue(200)
      : 0}px;

  border: 1px solid ${({ theme }) => theme.colors.secondary100};
  border-radius: 8px;
  padding: 16px 16px;
  padding-bottom: 5px;

  margin-top: 5px;
`;

export const LessonLearnedLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  text-decoration-color: ${({ theme }) => theme.colors.link};
  text-align: center;

  margin-bottom: 30px;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;

  position: absolute;
  bottom: ${getBottomSpace() + 5}px;
`;

export const CheckboxIsAvailable = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${Platform.OS === "ios" ? 10 : 0}px;
`;

export const CheckboxContainer = styled(RectButton)<CheckboxProps>`
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
