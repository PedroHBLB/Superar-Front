import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;

  padding-top: ${getStatusBarHeight() + 32}px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 30px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-size: 15px;
`;
