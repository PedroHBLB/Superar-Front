import { format, parseISO } from "date-fns";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import { File } from "../../dtos/FileDTO";

import {
  Container,
  Title,
  Status,
  StatusText,
  StatusCode,
  Date,
  styles,
} from "./styles";

type Props = {
  document: File;
  loading: boolean;
};

export function DocumentCard({ document, loading }: Props) {
  const date = format(
    parseISO(document?.pilar?.data_inclusao),
    `dd/MM/YYY 'às' HH:mm`
  );
  return (
    <Container>
      <Title>
        {document.titulo === "lecture"
          ? "Palestra/Curso/Treinamento"
          : document.titulo}
      </Title>
      <Status>
        <StatusText>Status: </StatusText>
        <StatusCode status={document.pilar.status}>
          ● {document.pilar.status}
        </StatusCode>
      </Status>
      <Date>{date}</Date>
    </Container>
  );
}
