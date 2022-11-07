import styled from "styled-components/native";
import { Pressable, Dimensions, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

export const Container = styled(Pressable)`
  width: ${windowWidth / 3}px;
  padding: 0.5px;
`;

export const Image = styled.Image`
  height: ${RFValue(120)}px;
`;

export const Icon = styled(MaterialCommunityIcons)`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const styles = StyleSheet.create({
  shimmer: {
    width: windowWidth / 3,
    height: RFValue(120),
    paddingHorizontal: 0.5,
  },
  image: {
    height: RFValue(120),
  },
});
