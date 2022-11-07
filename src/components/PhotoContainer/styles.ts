import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons as In, Entypo as Et } from "@expo/vector-icons";

type ButtonProps = {
  disabled: boolean;
};

type ImageProps = {
  length: number;
};

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(164)}px;

  justify-content: flex-end;
  align-items: center;
  border: 2px dashed ${({ theme }) => theme.colors.ongoing};
  border-radius: 1px;
  margin-top: 22px;

  padding-bottom: 15px;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  margin-left: 8%;
`;

export const Icon = styled(In).attrs({
  size: 70,
})`
  color: ${({ theme }) => theme.colors.ongoing};
`;
export const IconPlus = styled(Et).attrs({
  size: 35,
})`
  color: ${({ theme }) => theme.colors.ongoing};
`;

export const ImagesContainer = styled.View`
  width: 100%;
  align-items: flex-start;

  padding-left: 10px;
`;

export const FilesContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-start;

  /* padding-bottom: 15px; */
`;

export const ImageNumberContainer = styled.View`
  flex-direction: row;
`;

export const ImageSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.ongoing};
`;

export const ImageNumber = styled.Text<ImageProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, length }) =>
    length >= 3 ? theme.colors.primary : theme.colors.shape};
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: center;

  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  height: 30px;
  width: 40%;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? theme.colors.ongoing_light : theme.colors.ongoing};
  margin: 0 ${RFValue(10)}px;
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.ongoing_light : theme.colors.ongoing};
`;
