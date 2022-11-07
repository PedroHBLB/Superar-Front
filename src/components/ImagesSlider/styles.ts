import styled from "styled-components/native";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../global/styles/theme";

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const ImageIndexes = styled.View`
  position: absolute;
  bottom: ${15}px;
  right: 0;
  left: 0;
  flex-direction: row;
  justify-content: center;
`;

export const ImageWrapper = styled.View`
  width: ${Dimensions.get("window").width}px;
`;

export const ImageNumber = styled.View`
  position: absolute;
`;

export const Number = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
  },
  numbers: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
    height: RFValue(20),
    width: RFValue(30),
    borderRadius: RFValue(20),
  },
});
