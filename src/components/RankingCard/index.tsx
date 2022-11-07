import React, { useState } from "react";
import { PressableProps } from "react-native";
import { UserRanking } from "../../dtos/RankingDTO";
import { ModalViewOtherRanking } from "../ModalViewOtherRanking";

import {
  Container,
  Rank,
  RankNumberContainer,
  RankNumber,
  RankDivider,
  UserInfo,
  Image,
  RankUser,
  UserName,
  UserDepartment,
  RankPerformanceContainer,
  RankPerformance,
  RankPoints,
  RankPointsText,
} from "./styles";

type Props = PressableProps & {
  user: UserRanking;
  index: number;
};

export function RankingCard({ index, user }: Props) {
  const [otherRankingModal, setOtherRankingModal] = useState(false);

  const handleCloseOtherRanking = () => {
    setOtherRankingModal(false);
  };
  return (
    <Container>
      <Rank onLongPress={() => setOtherRankingModal(true)}>
        <RankNumberContainer>
          <RankNumber>{index + 1}</RankNumber>
        </RankNumberContainer>
        <RankDivider />
        <UserInfo>
          <Image
            source={{
              uri: user.colaborador_avatar,
            }}
          />
          <RankUser>
            <UserName>{user.colaborador_nome}</UserName>
            <UserDepartment>{user.colaborador_setor}</UserDepartment>
          </RankUser>
        </UserInfo>
        <RankPerformanceContainer>
          <RankPerformance>
            <RankPoints>{user.pontuacao_do_mes}</RankPoints>
            <RankPointsText>pontos</RankPointsText>
          </RankPerformance>
        </RankPerformanceContainer>
        <ModalViewOtherRanking
          user={user}
          visible={otherRankingModal}
          closeModal={handleCloseOtherRanking}
        />
      </Rank>
    </Container>
  );
}
