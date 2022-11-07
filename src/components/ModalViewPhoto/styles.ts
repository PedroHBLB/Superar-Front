import styled, { css } from "styled-components/native";
import { FlatList, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";

type StatusProps = {
  status: "aprovado" | "recusado" | "pendente";
};

export const ModalWrapper = styled.View`
  width: 100%;
  height: 80%;
`;

export const Bar = styled.View`
  height: ${RFValue(4)}px;
  width: ${RFValue(35)}px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 2px;

  margin-top: 6px;

  align-self: center;
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  padding-top: 10%;
`;

export const SubtitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-left: 6px;

  margin-bottom: 4px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const SubtitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const PhotoContent = styled.View`
  width: 100%;
  height: 80%;
`;

export const PhotoStatus = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 4px 6px;
`;

export const PhotoInfo = styled.View``;

export const Likes = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};

  padding-bottom: 4px;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(9)}px;
  color: ${({ theme }) => theme.colors.shape_light_opacity100};
`;

export const Status = styled.Text<StatusProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;

  ${({ status }) =>
    status === "pendente" &&
    css`
      color: ${({ theme }) => theme.colors.ongoing};
    `};
  ${({ status }) =>
    status === "recusado" &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `};
  ${({ status }) =>
    status === "aprovado" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};

  margin-right: 20%;
`;

export const Footer = styled.View`
  padding-top: 15px;
  padding-left: 6px;

  padding-bottom: ${getBottomSpace()}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 5px;
`;

export const CommentsContainer = styled.View``;

export const Comments = styled(FlatList)`
  width: 100%;
`;

export const Comment = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 4px;
`;

export const Author = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const CommentText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    height: RFValue(400),
  },
});
