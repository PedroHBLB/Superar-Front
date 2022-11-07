import styled from "styled-components/native";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  padding-bottom: ${RFValue(14)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 3px 6px;
`;

export const ProfilePhoto = styled.Image`
  width: ${RFValue(34)}px;
  height: ${RFValue(34)}px;
  border-radius: 20px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-left: 6px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: ${RFValue(400)}px;
`;

export const Footer = styled.View``;

export const Engagement = styled.View`
  flex-direction: row;
  align-items: center;

  margin-left: 5px;
  margin-top: 3px;
`;

export const Like = styled(AntDesign)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Message = styled(EvilIcons)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-left: 8px;
`;

export const LikeNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-top: 3px;
  margin-left: 6px;
`;

export const Subtitle = styled.View`
  flex-direction: row;
  align-items: center;

  margin-left: 6px;
  margin-top: 6px;
`;

export const SubtitleAuthor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const SubtitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Time = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(9)}px;
  color: ${({ theme }) => theme.colors.shape_light_opacity100};

  margin-left: 6px;
`;
