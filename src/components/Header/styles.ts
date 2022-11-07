import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding:0 ${RFValue(16)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight()+ RFValue(34)}px;
`;