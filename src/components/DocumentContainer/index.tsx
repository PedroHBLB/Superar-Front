import React from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { Document } from "../../screens/Requests";

import {
  Container,
  IconsContainer,
  Icon,
  IconPlus,
  FilesContainer,
  PdfName,
  PdfNumberContainer,
  PdfSubtitle,
  PdfNumber,
  ButtonsContainer,
  Button,
  Title,
} from "./styles";

type Props = {
  document: Document;
  handleRemoveDocuments: () => void;
  handleOpenDocuments: () => Promise<void>;
  loading: boolean;
};

export function DocumentContainer({
  document,
  handleRemoveDocuments,
  handleOpenDocuments,
  loading,
}: Props) {
  const disabled = Object.keys(document).length === 0 ? false : true;
  const theme = useTheme();

  return (
    <Container>
      {!disabled ? (
        loading ? (
          <ActivityIndicator size="large" color={theme.colors.primary} />
        ) : (
          <IconsContainer>
            <Icon name="document-attach-outline" />
            <IconPlus name="plus" />
          </IconsContainer>
        )
      ) : (
        <FilesContainer>
          <PdfName>{document.name}</PdfName>
          <PdfNumberContainer>
            <PdfSubtitle>PDF: </PdfSubtitle>
            <PdfNumber>(1/1)</PdfNumber>
          </PdfNumberContainer>
        </FilesContainer>
      )}
      <ButtonsContainer>
        <Button onPress={handleOpenDocuments} disabled={disabled}>
          <Title disabled={disabled}>Abrir documentos</Title>
        </Button>
        <Button onPress={handleRemoveDocuments} disabled={!disabled}>
          <Title disabled={!disabled}>Limpar</Title>
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
