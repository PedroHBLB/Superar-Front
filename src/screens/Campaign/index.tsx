import React from "react";
import { AboutHeader } from "../../components/AboutHeader";
import { Background } from "../../components/Background";
import { ScrollView } from "../../components/ScrollView";

import {
  Container,
  ScrollContainer,
  Category,
  Categories,
  Title,
  Text,
  Label,
} from "./styles";

export function Campaign() {
  return (
    <Background>
      <Container>
        <AboutHeader title="Sobre" />
        <ScrollView>
          <ScrollContainer>
            <Text>
            Sejam bem-vindos à Edição Especial de Copa do Mundo da campanha Superar Para Inovar!{"\n"}
            </Text>
            <Text>
            Nosso objetivo por meio desta campanha é incentivar os colaboradores no seu desenvolvimento profissional e pessoal,
            deixando a zona de conforto e excedendo seus limites. Esperamos que todos estejam bem envolvidos. 
            Por meio da campanha, o ambiente de trabalho vai se tornar muito mais agradável e ao mesmo tempo 
            teremos uma competição saudável.
            {"\n"}
            </Text>
            <Text>
            A Campanha estará ativa no período de 4 semanas, de 30 de outubro a 26 de novembro de 2022.
            A premiação é semanal, então teremos o ranking dos melhores a cada semana. 
            Você pode juntar seus pontos dentro do período abaixo:{"\n"}
            </Text>
            <Text>
            1ª semana: de 30/10 a 05/11{"\n"}
            2ª semana: de 06/11 a 12/11{"\n"}
            3ª semana: de 13/11 a 19/11{"\n"}
            4ª semana: de 20/11 a 26/11{"\n"}
            </Text>
            <Text>
            A Edição Especial é sustentada sobre cinco pilares:{"\n"}
            </Text>
            <Text>
              <Label>PILARES BASE (Compõe o ranking semanal)</Label>
            </Text>
            <Categories>
              <Category>
                <Label>Conhecimento e Inovação</Label>
                <Text>máximo de 10 pontos na semana</Text>
              </Category>
              <Category>
                <Label>Saúde</Label>
                <Text>máximo de 20 pontos na semana</Text>
              </Category>
              <Category>
                <Label>Cultura Organizacional</Label>
                <Text>máximo de 10 pontos na semana{"\n"}</Text>
              </Category>
              <Text>
                <Label>PILARES BÔNUS (Compõe apenas a carteira - Bônus financeiro ao final da campanha)</Label>
              </Text>
              <Category>
                <Label>Walk the Talk</Label>
                <Text>máximo de 10 pontos no fim da campanha</Text>
              </Category>
              <Category>
                <Label>Responsabilidade Social{"\n"}Individual</Label>
                <Text>máximo de 5 pontos no fim da campanha</Text>
              </Category>
            </Categories>
            <Text>
              Cada pilar possui requisitos e é por meio deles que os participantes serão pontuados.{"\n"}
            </Text>
            <Text>
            A pontuação máxima semanal é de 40 pontos (soma dos pilares base). 
            O objetivo é que o colaborador acumule o máximo de pontos possíveis na semana 
            para que ele esteja bem ranqueado e apto a receber a sua premiação.{"\n"}
            </Text>
            <Text>
            Cada ponto equivalerá, ao final da campanha, R$1,00. Ou seja, após as 4 semanas o colaborador poderá ter R$160,00 na carteira. 
            Através dos pilares bônus, o participante poderá ganhar mais R$15,00 ao final da campanha, totalizando R$175,00.{"\n"}
            </Text>
            <Text>
            A campanha não é obrigatória.
            Para mais informações, entre em contato através do e-mail superarparainovar@integradora.com.br.
            </Text>
          </ScrollContainer>
        </ScrollView>
      </Container>
    </Background>
  );
}
