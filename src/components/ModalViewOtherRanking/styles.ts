import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";

export const ModalWrapper = styled.View`
  width: 100%;
  height: 40%;
`;

export const Header = styled.View`
  width: 100%;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.shape_light_opacity100};

  padding: 6px 0;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 12px;
`;

export const Content = styled.View`
  flex: 1;
  padding-bottom: ${getBottomSpace()}px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 24px;
`;

export const Photo = styled.Image`
  width: 73px;
  height: 73px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-radius: 38px;
`;

export const PhotoTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 6px;
`;

export const CurrentMonth = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;

  margin-top: 12px;
`;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
    justifyContent: "center",
  },
});
