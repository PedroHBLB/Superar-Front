import React from "react";
import { AboutHeader } from "../../components/AboutHeader";
import { Background } from "../../components/Background";
import { ScrollView } from "../../components/ScrollView";

import { Container, ScrollContainer, Text, Label } from "./styles";

export function Questions() {
  return (
    <Background>
      <Container>
        <AboutHeader title="Dúvidas frequentes" />
        <ScrollView>
          <ScrollContainer>
            <Label>
              1 – Os prêmios podem ser substituídos por quantia em dinheiro?{" "}
            </Label>
            <Text>Não.{"\n"}</Text>
            <Label>2 – Quem pode participar?</Label>
            <Text>
            Todos os colaboradores e estagiários.{"\n"}
            </Text>
            <Label>
              3 – Quais as consequências para quem burlar as regras?
            </Label>
            <Text>
            Quem burlar as regras da campanha, seja por enviar fotos ou vídeos falsos, resumos copiados ou qualquer outra forma de violação das regras terá a sua pontuação do último mês zerada.{"\n"}
            </Text>
            <Label>
              4 – Estarei de férias nesse período, posso participar?
            </Label>
            <Text>
              Sim, durante o período de férias o colaborador pode continuar
              participando da campanha.{"\n"}
            </Text>
            <Label>
              5 – Fui afastado das minhas atividades, posso participar?
            </Label>
            <Text>
              Não, o colaborador não poderá participar da campanha pelo período
              em que estiver afastado.{"\n"}
            </Text>
            <Label>6 – A pontuação é acumulativa?</Label>
            <Text>
              A pontuação é semanal. Entretanto, para a premiação financeira, serão somados os pontos de todas as semanas.{"\n"}
            </Text>
            <Label>
              7 - Sobre as fotos da alimentação, como devo tirar a foto?
            </Label>
            <Text>
              A foto deve ser ao estilo "selfie". Não aceitaremos foto apenas do prato ou com o crachá do lado.{"\n"}
            </Text>
            <Label>
              8 - Sobre as fotos de atividade física, como devo tirar a foto?
            </Label>
            <Text>
            A foto deve ser ao estilo "selfie". Nós não aceitaremos fotos apenas do rosto, o ideal é que na foto mostre onde a pessoa está. {"\n"}
            </Text>
            <Label>
              9 – Me matriculei na academia, apenas a inscrição é suficiente para ganhar pontos?
            </Label>
            <Text>
              Não, o colaborador deve enviar fotos na academia ou comprovantes de comparecimento (tickets com o treino do dia).
              {"\n"}
            </Text>
            <Label>
              10 - Qual o critério de desempate caso duas pessoas ou mais alcancem 40 pontos?
            </Label>
            <Text>
            A comissão do Superar Para Inovar avaliará a performance dos participantes e, com base nisso, priorizará a pessoa que se esforçou mais durante a semana, seguindo os critérios:{"\n"}
            </Text>
            <Text>
            1. Melhores cases{"\n"}
            2. Melhores resumos{"\n"}
            3. Atividades físicas mais intensas{"\n"}
            4. Maior quantidade de refeições saudáveis{"\n"}
            5. Maior pontuação no pilar Walk The Talk{"\n"}
            </Text>
            <Text>
            Nós enviaremos um e-mail para todos os que empataram com os motivos da decisão.
            </Text>
          </ScrollContainer>
        </ScrollView>
      </Container>
    </Background>
  );
}
