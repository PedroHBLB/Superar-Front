import styled, { css } from "styled-components/native";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

type StatusColor = {
  status: string;
};

export const Container = styled.View`
  padding-left: 5px;

  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Title = styled.Text`
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Status = styled.View`
  flex-direction: row;
`;

export const StatusText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const StatusCode = styled.Text<StatusColor>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

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
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const styles = StyleSheet.create({
  shimmerTitle: {
    width: "100%",
    fontSize: RFValue(14),
    borderRadius: 7,
    paddingBottom: 1,
  },
  shimmerStatus: {
    fontSize: RFValue(14),
    borderRadius: 7,
    paddingBottom: 1,
  },
  shimmerDate: {
    width: "50%",
    borderRadius: 7,
    paddingBottom: 1,
  },
});
