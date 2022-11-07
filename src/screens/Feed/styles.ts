import styled from "styled-components/native";
import { FlatList } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";

import { RFValue } from "react-native-responsive-fontsize";
import { Post } from "../../dtos/PhotoDTO";

export const Container = styled.View`
  flex: 1;
`;

export const SvgContainer = styled.View`
  align-self: center;
  align-items: center;
  position: absolute;
  margin-top: ${getStatusBarHeight() + 15}px;
`;

export const Svg = styled.View`
  align-items: center;
  position: relative;
  left: -50%;

  background-color: black;
`;

export const FeedContainer = styled(FlatList as new () => FlatList<Post>).attrs(
  {
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      paddingBottom: getBottomSpace() + 5,
    },
  }
)`
  padding-top: ${RFValue(15)}px;
`;
