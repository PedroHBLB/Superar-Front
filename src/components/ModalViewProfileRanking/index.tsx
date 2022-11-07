import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { format, subMonths, isAfter } from "date-fns";
import { ptBR } from "date-fns/esm/locale";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Background } from "../Background";
import { PillarPoints } from "../PillarPoints";
import {
  styles,
  Container,
  ModalWrapper,
  Header,
  Bar,
  Title,
  Content,
  ImageContainer,
  Photo,
  PhotoTitle,
  CurrentMonth,
  OtherMonthsWrapper,
  OtherMonthsTitle,
  OtherMonthContainer,
  OtherMonth,
  OtherMonthTitle,
} from "./styles";

export type Score = {
  pilar: "saude" | "conhecimento" | "qualidade" | "wtt" | "rsi";
  pontuacao_do_mes: number;
};
export type Month = {
  key: string;
  scores: Score[];
};

type Props = {
  visible: boolean;
  closeModal: () => void;
};

export function ModalViewProfileRanking({ closeModal, visible }: Props) {
  const [loading, setLoading] = useState(false);
  const [months, setMonths] = useState<Month[]>([]);

  const { colaborador, firstMonth } = useAuth();
  const detailsScore = {
    saude: "Saúde",
    conhecimento: "Conhecimento e inovação",
    qualidade: "Qualidade",
    wtt: "Walk the talk",
    rsi: "Responsabilidade Social Individual",
  };
  const currentMonth = new Date();
  const currentMonthFormatted = format(new Date(), "MMMM", {
    locale: ptBR,
  });

  const fetchAllMonths = async () => {
    setLoading(true);
    try {
      let date = currentMonth;
      while (true) {
        if (isAfter(firstMonth, date)) {
          break;
        }
        const { data } = await api.get(
          `/colaborador/score?redirect_month=${format(date, "M")}`
        );

        const newMonthScore: Month = {
          key: format(date, "MMMM", {
            locale: ptBR,
          }),
          scores: data,
        };

        setMonths((oldState) => [...oldState, newMonthScore]);
        date = subMonths(date, 1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllMonths();
  }, []);

  return (
    <Modal
      isVisible={visible}
      style={styles.modal}
      onBackdropPress={closeModal}
      backdropTransitionOutTiming={50}
      swipeDirection={["down"]}
      onSwipeComplete={closeModal}
      propagateSwipe={true}
    >
      <ModalWrapper>
        <Background border>
          <>
            <Header>
              <Bar />
              <Title>Ver detalhes</Title>
            </Header>
            <Content>
              <ImageContainer>
                {colaborador.data.avatar && (
                  <Photo
                    source={{
                      uri: colaborador.data.avatar,
                    }}
                  />
                )}
                <PhotoTitle>Pontuação desse mês</PhotoTitle>
              </ImageContainer>
              <CurrentMonth>
                {months.map(
                  (month) =>
                    month.key === currentMonthFormatted &&
                    month.scores.map((score, index) => (
                      <PillarPoints
                        key={score.pilar}
                        score={score.pontuacao_do_mes}
                        pillar={detailsScore[score.pilar]}
                        border={
                          index === month.scores.length - 1 ? false : true
                        }
                      />
                    ))
                )}
              </CurrentMonth>
              <OtherMonthsTitle>Anteriores:</OtherMonthsTitle>
              <OtherMonthsWrapper>
                <View onStartShouldSetResponder={() => true}>
                  {months.map(
                    (month) =>
                      month.key != currentMonthFormatted && (
                        <OtherMonthContainer key={month.key}>
                          <OtherMonthTitle>
                            {month.key.toUpperCase()}:
                          </OtherMonthTitle>
                          <OtherMonth>
                            {month.scores.map((score, index) => (
                              <PillarPoints
                                key={score.pilar}
                                score={score.pontuacao_do_mes}
                                pillar={detailsScore[score.pilar]}
                                border={
                                  index === month.scores.length - 1
                                    ? false
                                    : true
                                }
                              />
                            ))}
                          </OtherMonth>
                        </OtherMonthContainer>
                      )
                  )}
                </View>
              </OtherMonthsWrapper>
            </Content>
          </>
        </Background>
      </ModalWrapper>
    </Modal>
  );
}
