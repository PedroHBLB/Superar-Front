import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";
import theme from "../../global/styles/theme";

const { shape_light_opacity100, shape_light_opacity50 } = theme.colors;

export const Container = styled(LinearGradient).attrs({
  colors: [shape_light_opacity100, shape_light_opacity50],
})`
  height: ${RFValue(82)}px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-radius: 16px;

  margin-top: 8px;
`;

export const Rank = styled.Pressable`
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items:  center;
`;

export const RankNumberContainer = styled.View`
  height: 100%;
  width: ${RFValue(85)}px;
  align-items: center;
  justify-content: center;

`;

export const RankNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.rank_number};
  font-size: ${RFValue(40)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const RankDivider = styled.View`
  width: 1px;
  height: ${RFValue(82)}px;
  background-color: ${({ theme }) => theme.colors.secondary100};
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;

  margin-left: 10px;
`;

export const Image = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;

  border-radius: ${RFValue(30)}px;
`;

export const RankUser = styled.View`
  margin-left: 8px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const UserDepartment = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const RankPerformanceContainer = styled.View`
  position: absolute;
  right: 4px;
`;
export const RankPerformance = styled.View`
  align-items: flex-end;
`;

export const RankPoints = styled.Text`
  font-family: ${({ theme }) => theme.fonts.rank_number};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const RankPointsText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.shape};
`;
