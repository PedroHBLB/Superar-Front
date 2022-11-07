import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import { format } from "date-fns";

import { api } from "../../services/api";
import { useTheme } from "styled-components";

import { Background } from "../Background";
import { PillarPoints } from "../PillarPoints";
import { UserRanking } from "../../dtos/RankingDTO";

import {
  styles,
  ModalWrapper,
  Header,
  Title,
  Content,
  ImageContainer,
  Photo,
  PhotoTitle,
  CurrentMonth,
} from "./styles";

type Props = {
  user: UserRanking;
  visible: boolean;
  closeModal: () => void;
};

type PillarScore = {
  pilar: "saude" | "conhecimento" | "qualidade" | "wtt" | "rsi";
  pontuacao_do_mes: number;
};

export function ModalViewOtherRanking({ user, visible, closeModal }: Props) {
  const [loading, setLoading] = useState(false);
  const [currentScore, setCurrentScore] = useState<PillarScore[]>([]);
  const currentMonth = format(new Date(), "M");

  const theme = useTheme();

  const detailsScore = {
    saude: "Saúde",
    conhecimento: "Conhecimento e inovação",
    qualidade: "Qualidade",
    wtt: "Walk the talk",
    rsi: "Responsabilidade Social Individual",
  };
  const fetchAnotherRanking = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(
        `/colaborador/score/${user.colaborador_id}?redirect_month=${currentMonth}`
      );
      setCurrentScore(data);
    } catch (err: any) {
      console.log(err.response);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (visible === true) fetchAnotherRanking();
  }, [visible]);
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={closeModal}
      style={styles.modal}
      animationIn={"zoomInDown"}
      animationOut={"zoomOutUp"}
      animationInTiming={500}
      animationOutTiming={500}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
    >
      <ModalWrapper>
        <Background>
          <>
            <Header>
              <Title>Detalhes</Title>
            </Header>
            <Content>
              <ImageContainer>
                <Photo
                  source={{
                    uri: user.colaborador_avatar,
                  }}
                />
                <PhotoTitle>Pontuação desse mês</PhotoTitle>
              </ImageContainer>
              {loading ? (
                <ActivityIndicator size="small" color={theme.colors.primary} />
              ) : (
                <CurrentMonth>
                  {currentScore.map((item, index) => (
                    <PillarPoints
                      key={item.pilar}
                      score={item.pontuacao_do_mes}
                      pillar={detailsScore[item.pilar]}
                      border={index === currentScore.length - 1 ? false : true}
                    />
                  ))}
                </CurrentMonth>
              )}
            </Content>
          </>
        </Background>
      </ModalWrapper>
    </Modal>
  );
}
