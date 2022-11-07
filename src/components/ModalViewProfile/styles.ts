import styled from "styled-components/native";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import theme from "../../global/styles/theme";
import { AntDesign } from "@expo/vector-icons";

type ModalProps = {
  isActive: boolean;
};

export const ModalWrapper = styled.View`
  flex: 1;

  padding-top: ${getStatusBarHeight()}px;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(41)}px;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  padding: 0 30px;
  padding-bottom: 6px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.shape_light_opacity100};
`;

export const BackButton = styled(TouchableWithoutFeedback)`
  align-items: center;
`;

export const BackButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ConfirmContainer = styled.View`
  align-items: center;
  width: 18%;
`;

export const ConfirmButton = styled(TouchableWithoutFeedback)``;

export const ConfirmButtonTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.success};
`;

export const Content = styled.View`
  flex: 1;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 24px;
`;
export const ImageButton = styled.TouchableWithoutFeedback`
  align-items: center;
`;

export const Photo = styled.Image`
  width: 150px;
  height: 150px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 75px;
`;

export const PhotoLink = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.primary};

  margin-top: 6px;
`;

export const UserDataWrapper = styled.View`
  flex: 1;
  padding: 0 18px;
  padding-top: 20px;
`;

export const Data = styled.View`
  margin-bottom: ${RFValue(21)}px;
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

export const ModalButton = styled(TouchableOpacity)`
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
export const TextLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
  padding-right: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const UserData = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
  padding-right: 10px;
  margin-right: 10px;
`;

export const UserMessage = styled.TextInput`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.success};
  text-align: center;
`;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  photo: {
    width: 73,
    height: 73,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 38,
  },
});
