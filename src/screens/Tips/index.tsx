import React, { useState, useEffect } from "react";
import { AboutHeader } from "../../components/AboutHeader";
import { Background } from "../../components/Background";
import { ScrollView } from "../../components/ScrollView";

import { Container, ScrollContainer, Text, Label} from "./styles";

export function Tips() {
  return (
    <Background>
      <Container>
        <AboutHeader title="Bônus Financeiro" />
        <ScrollView>
          <ScrollContainer>
          <Label>Atividade Física:</Label>
            <Text>
            Todo semana atualizaremos a Carteira, onde é possível saber o valor que você receberá até o momento, somando os pontos dos pilares fixos e o bônus.{"\n"}
            </Text>
            <Text>
            No ranking a pontuação não ultrapassa os 40 pontos semanais. Entretanto se o colaborador conquistar mais de 40 pontos através dos bônus, estes pontos extras serão revertidos em prêmio financeiro no final da campanha.{"\n"} 
            </Text>
            <Text>
            Cada ponto equivale a R$1,00. Ou seja, após as 4 semanas o colaborador poderá ter R$160,00 na carteira. Através dos pilares bônus, o participante poderá ganhar mais R$15,00 ao final da campanha, totalizando R$175,00.{"\n"}
            </Text>
            <Text>
            Isso sem contar com os prêmios semanais. Ou seja, no final você poderá ter ganho vários prêmios!
            </Text>
          </ScrollContainer>
        </ScrollView>
      </Container>
    </Background>
  );
}
