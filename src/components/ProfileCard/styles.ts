import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View``;

export const ProfileInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: ${RFValue(11)}px;
  padding-left: ${RFValue(14)}px;

  margin-top: ${RFValue(11)}px;
  margin-bottom: ${RFValue(4)}px;
`;

export const ProfiliePhotoContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: ${RFValue(73)}px;
  height: ${RFValue(73)}px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(40)}px;
`;
export const ProfilePhotoButton = styled.TouchableWithoutFeedback``;

export const Photo = styled.Image`
  width: ${RFValue(73)}px;
  height: ${RFValue(73)}px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${RFValue(40)}px;
`;

export const ProfileEffort = styled.View`
  align-items: flex-end;
`;

export const ProfilePoints = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const ProfileRank = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.shape};

  padding-left: ${RFValue(14)}px;
  margin-bottom: 12px;
`;

export const Setor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.shape};

  padding-left: ${RFValue(14)}px;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;

  margin-top: 6px;
`;
