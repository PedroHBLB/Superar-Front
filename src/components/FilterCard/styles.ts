import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

type ButtonProps = {
  isFilter: boolean;
};

export const FilterButton = styled(RectButton)<ButtonProps>`
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ isFilter }) => (isFilter ? 1 : 0.6)};

  padding: 0 25px;
  margin: 0 10px;
  border-radius: 10px;
`;

export const FilterTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
