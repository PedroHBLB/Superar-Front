import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";

import { format } from "date-fns";
import { api } from "../../services/api";
import { useTheme } from "styled-components";
import { UserRanking } from "../../dtos/RankingDTO";

import { Divider } from "../../components/Divider";
import { Background } from "../../components/Background";
import { ProfileCard } from "../../components/ProfileCard";
import { RankingLoad } from "../../components/RankingLoad";
import { ModalViewProfileRanking } from "../../components/ModalViewProfileRanking";

import {
  Container,
  ContainerHeader,
  FilterItems,
  RankingContainer,
} from "./styles";
import { RankingCard } from "../../components/RankingCard";
import { FilterCard } from "../../components/FilterCard";
import { UnderConstruction } from "../../components/UnderConstruction";

type RankingCardProps = UserRanking[];

export function Ranking() {
  const [filter, setFilter] = useState<
    "TODOS" | "ADM" | "AT" | "IC" | "IT" | "OT" | "PMO" | "SUL" | "VENDAS"
  >("TODOS");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [ownRankingModal, setOwnRankingModal] = useState(false);
  const [data, setData] = useState<RankingCardProps>([]);
  const [dataFiltered, setDataFiltered] = useState<RankingCardProps>([]);
  const [page, setPage] = useState(1);
  const filters: (
    | "TODOS"
    | "ADM"
    | "AT"
    | "IC"
    | "IT"
    | "OT"
    | "PMO"
    | "SUL"
    | "VENDAS"
  )[] = ["TODOS", "ADM", "AT", "IC", "IT", "OT", "PMO", "SUL", "VENDAS"];

  const theme = useTheme();

  const currentMonth = format(new Date(), "M");

  const handleFilteredRanking = (
    value:
      | "TODOS"
      | "ADM"
      | "AT"
      | "IC"
      | "IT"
      | "OT"
      | "PMO"
      | "SUL"
      | "VENDAS"
  ) => {
    setFilter(value);
    if (value === "TODOS") {
      return setDataFiltered(data);
    }
    setDataFiltered(
      data.filter((colaborador) => colaborador.colaborador_setor === value)
    );
  };

  const checkRealRanking = (colaborador: UserRanking) => {
    const position = data.indexOf(colaborador);

    return position;
  };

  const fetchRanking = async () => {
    try {
      const { data } = await api.get(
        `/colaboradores/scores?redirect_month=${currentMonth}&_page=${page}&limit=16`
      );

      const newRanking = data.filter(
        (item: UserRanking) => item.pontuacao_do_mes !== 0
      );

      if (!data) {
        setLoading(true);
      }

      if (page > 1) {
        setData((oldState) => [...oldState, ...newRanking]);
      } else {
        setData(newRanking);
      }

      setLoading(false);
      setLoadingMore(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  const fetchRankingMore = async (distance: number) => {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchRanking();
  };

  const handleCloseOwnRanking = () => {
    setOwnRankingModal(false);
  };

   useEffect(() => {
     setLoading(true);
     fetchRanking();
   }, []);

   useEffect(() => {
     handleFilteredRanking(filter);
   }, [data]);

  return (
    <Background>
      <Container>
        <ProfileCard
          title="Ver detalhes"
          onPress={() => setOwnRankingModal(true)}
        />
        <Divider type="profile" />
        <FilterItems
          data={filters}
          horizontal
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <FilterCard
              nome={item}
              filter={filter}
              onPress={handleFilteredRanking}
            />
          )}
          showsHorizontalScrollIndicator={false}
        />
        { loading ? (
          <RankingLoad />
        ) : (
          <RankingContainer
            data={dataFiltered}
            keyExtractor={(item) => item.colaborador_id}
            renderItem={({ item, index }) => (
              <RankingCard index={checkRealRanking(item)} user={item} />
            )}
            onEndReachedThreshold={0.1}
            onEndReached={({ distanceFromEnd }) =>
              fetchRankingMore(distanceFromEnd)
            }
            ListFooterComponent={
              loadingMore ? (
                <ActivityIndicator color={theme.colors.primary} />
              ) : (
                <></>
              )
            }
          />
        )}
        {/*<UnderConstruction />*/}
      </Container>
      <ModalViewProfileRanking
        visible={ownRankingModal}
        closeModal={handleCloseOwnRanking}
      />
    </Background>
  );
}
