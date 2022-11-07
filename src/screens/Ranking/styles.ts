import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { UserRanking } from "../../dtos/RankingDTO";

export const Container = styled.View`
  flex: 1;
`;

export const ContainerHeader = styled.View`
  height: ${RFValue(292)}px;
`;

export const FilterItems = styled(
  FlatList as new () => FlatList<
    "TODOS" | "ADM" | "AT" | "IC" | "IT" | "OT" | "PMO" | "SUL" | "VENDAS"
  >
).attrs({
  contentContainerStyle: {
    paddingHorizontal: 10,
    paddingRight: 50,
  },
})`
  padding: 5px 5px;

  height: 100px;
`;

export const RankingContainer = styled(
  FlatList as new () => FlatList<UserRanking>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 5,
    alignItems: "center",
  },
})`
  padding-left: 5%;
  padding-right: 5%;
`;
