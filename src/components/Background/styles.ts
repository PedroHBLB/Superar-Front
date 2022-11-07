import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/styles/theme";

const { secondary100, secondary50 } = theme.colors;

export const BackgroundColor = styled(LinearGradient).attrs({
  colors: [secondary50, secondary100],
})`
  flex: 1;
`;
