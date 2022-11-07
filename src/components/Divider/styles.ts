import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type ScreenType = {
  type: "feed" | "profile";
};

export const Line = styled.View<ScreenType>`
  width: 100%;
  height: ${RFValue(1)}px;
  background-color: ${({ type, theme }) =>
    type === "feed" ? theme.colors.success_light : theme.colors.primary};
  margin-top: ${({ type }) => (type === "feed" ? RFValue(43) : RFValue(18))}px;
`;
