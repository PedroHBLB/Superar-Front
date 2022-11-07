import React from "react";
import { Button } from "../../components/Button";
import { Container, ButtonsContainer, Footer } from "./styles";
import SuperarSvg from "../../assets/superar-para-inovar.svg";

import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import { Dimensions } from "react-native";

export function About() {
  const navigation = useNavigation();

  const handleButtonNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <Background>
      <Container>
        <Header />
        <ButtonsContainer>
          <Button
            title="Sobre"
            onPress={() => handleButtonNavigation("Campaign")}
          />
          <Button
            title="Pilares"
            onPress={() => handleButtonNavigation("Pillars")}
          />
          <Button
            title="Premiação"
            onPress={() => handleButtonNavigation("Award")}
          />
          <Button
            title="Bônus Financeiro"
            onPress={() => handleButtonNavigation("Tips")}
          />
          <Button
            title="Dúvidas Frequentes"
            onPress={() => handleButtonNavigation("Questions")}
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
    </Background>
  );
}
