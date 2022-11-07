import styled, { css } from "styled-components/native";
import { Pressable, StyleSheet } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

interface ScreenOrientation {
  orientation: string;
}

export const Container = styled.View<ScreenOrientation>`
  flex: 1;
  ${({ orientation }) =>
    orientation === "PORTRAIT"
      ? css`
          flex-direction: column;
        `
      : css`
          flex-direction: row;
        `};
`;

export const Header = styled.View<ScreenOrientation>`
  ${({ orientation }) =>
    orientation === "PORTRAIT"
      ? css`
          width: 100%;
          height: ${getStatusBarHeight() + RFValue(80)}px;
          flex-direction: row;
          align-items: flex-end;
          padding: 15px 10px;
        `
      : css`
          width: ${getStatusBarHeight() + RFValue(80)}px;
          height: 100%;
          flex-direction: row-reverse;
          align-items: flex-end;
          padding: 10px 15px;
        `};
`;

export const BackButton = styled(BorderlessButton)``;

export const BackIcon = styled(Ionicons)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const OptionsContainer = styled.View<ScreenOrientation>`
  position: absolute;
  bottom: 0px;
  ${({ orientation }) =>
    orientation === "PORTRAIT"
      ? css`
          width: 100%;
          height: ${getBottomSpace() + RFValue(80)}px;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
          padding-bottom: ${getBottomSpace()}px;
        `
      : css`
          height: 100%;
          flex-direction: column-reverse;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          right: ${getBottomSpace()}px;
        `};
`;

export const FlashCamera = styled(BorderlessButton)`
  justify-content: center;
  align-items: center;
`;

export const FlashIcon = styled(Ionicons)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonContainer = styled.View`
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(40)}px;
  border-color: ${({ theme }) => theme.colors.shape};
`;

export const TakePictureContainer = styled.View`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;
  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(40)}px;
`;

export const TakePictureButton = styled(Pressable).attrs({
  activeOpacity: 0.8,
})`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;
  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(40)}px;

  background-color: transparent;
`;

export const FlipCamera = styled(BorderlessButton)``;

export const FlipIcon = styled(Ionicons)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const styles = StyleSheet.create({
  camera: {
    width: "100%",
    height: "70%",
  },
  button: {
    borderRadius: RFValue(40),
    borderColor: "white",
  },
});
