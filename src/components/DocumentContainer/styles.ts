import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons as In, Entypo as Et } from "@expo/vector-icons";

type ButtonProps = {
  disabled: boolean;
};
export const Container = styled.View`
  width: 100%;
  height: ${RFValue(120)}px;

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
  size: 50,
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
  align-items: flex-start;

  padding: 0 10px;
`;

export const PdfNumberContainer = styled.View`
  flex-direction: row;
`;

export const PdfName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
  margin-bottom: 5px;
`;

export const PdfSubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.ongoing};
`;

export const PdfNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;

  justify-content: center;

  margin-top: 15px;
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  height: 30px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;

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
