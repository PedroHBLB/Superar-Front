import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const BackgroundImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BackgroundImage = styled.Image``;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  margin-top: -25%;
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

  margin-top: ${Dimensions.get("window").height <= 700 ? 0 : 15}%;
`;

export const RecoverPassword = styled.View`
  width: 100%;
  align-items: flex-end;

  margin-top: 5px;
`;

export const RecoverText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  opacity: 0.7;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;

  margin-top: 5%;
`;

export const Footer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;
  margin: 9px 0;
`;

export const Link = styled.Text`
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.shape};
`;
