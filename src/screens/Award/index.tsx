import React, { useState, useEffect } from "react";
import { AboutHeader } from "../../components/AboutHeader";
import { Background } from "../../components/Background";
import { ScrollView } from "../../components/ScrollView";
import { Label } from "../Tips/styles";

import { Container, Text } from "./styles";

export function Award() {
  return (
    <Background>
      <Container>
        <AboutHeader title="Premiação" />
        <ScrollView>
          <Text>
            <Label>Semana 1</Label>{"\n"}
            1º Colocado: Álbum da Copa do Mundo 2022 - Box Exclusivo Capa Dura Prata + 50 Pacotes de Figurinhas{"\n"}
          </Text>
          <Text>
            <Label>Semana 2</Label>{"\n"}
            1º Colocado: Camiseta Ofical da Seleção Brasileira{"\n"}
          </Text>
          <Text>
            <Label>Semana 3</Label>{"\n"}
            1º Colocado: Vale Compras para Churrasco na Swift{"\n"}
          </Text>
          <Text>
            <Label>Semana 4</Label>{"\n"}
            1º Colocado: Vale Compras em Loja Selecionada pelo ganhador{"\n"}
          </Text>
        </ScrollView>
      </Container>
    </Background>
  );
}
