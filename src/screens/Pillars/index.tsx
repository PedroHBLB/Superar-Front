import React, { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import SuperarSvg from "../../assets/superar-para-inovar.svg";
import { AboutHeader } from "../../components/AboutHeader";
import { Background } from "../../components/Background";
import { Button } from "../../components/Button";
import { ModalViewPillar } from "../../components/ModalViewPillar";

import { texts } from "../../utils/pillars";

import { Container, ButtonsContainer, ModalText, Footer, View } from "./styles";

type Pillar = {
  key: string;
  text: string;
};

export function Pillars() {
  const [visible, setVisible] = useState(false);
  const [pillar, setPillar] = useState("");

  function handleOpenModal(key: string) {
    const modalText = texts.find((pillar: Pillar) => pillar.key === key);

    setPillar(modalText!.text);
    setVisible(true);
  }
  return (
    <Background>
      <Container>
        <AboutHeader title="Pilares" />
        <ButtonsContainer>
          <Button
            title="Conhecimento e Inovação"
            onPress={() => handleOpenModal("knowledge")}
          />
          <Button title="Saúde" onPress={() => handleOpenModal("healthcare")} />
          <Button
            title="Qualidade"
            onPress={() => handleOpenModal("quality")}
          />
          <Button
            title="Walk the talk"
            onPress={() => handleOpenModal("wtt")}
          />
          <Button
            title="Responsabilidade Social Individual"
            onPress={() => handleOpenModal("isr")}
          />
        </ButtonsContainer>
        <Footer>
          <SuperarSvg
            width={Dimensions.get("window").width / 3}
            height={Dimensions.get("window").height / 8}
            opacity={0.4}
          />
        </Footer>
      </Container>
      <ModalViewPillar visible={visible} closeModal={() => setVisible(false)}>
        <ModalText>{pillar}</ModalText>
      </ModalViewPillar>
    </Background>
  );
}
