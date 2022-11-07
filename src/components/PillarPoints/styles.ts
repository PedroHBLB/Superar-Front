import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

type ContainerProps = {
  border: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: ${Dimensions.get('window').width / 5}px;
  height: ${RFValue(65)}px;
  align-items: center;
  justify-content: center;

  border-right-width: ${({ border }) => border ? 1 : 0}px;
  border-right-color: ${({ theme }) => theme.colors.success};

  padding: 1px;
`;

export const ScoreText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.shape};

  margin-bottom: 5px;
`;

export const Pillar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.shape};
  text-align: center;

  flex-wrap: wrap;
`;