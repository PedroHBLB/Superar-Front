import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Load } from "../../screens/Load";

import {
  Container,
  Title,
  HeaderTitle,
  ButtonContainer,
  Button,
  BackButton,
  ConfirmIcon,
  Hide,
} from "./styles";

type Props = {
  title: string;
  confirm?: boolean;
  loading?: boolean;
  handleSendForms?: () => Promise<void>;
};

export function AboutHeader({
  title,
  confirm = false,
  loading = false,
  handleSendForms,
}: Props) {
  const Navigation = useNavigation();

  function handleBackNavigation() {
    Navigation.goBack();
  }

  return (
    <Container>
      <HeaderTitle>
        <Button onPress={handleBackNavigation}>
          <BackButton name="chevron-thin-left" />
        </Button>
        <Title>{title}</Title>
        {loading ? (
          <ButtonContainer>
            <Load />
          </ButtonContainer>
        ) : (
          <Button onPress={handleSendForms}>
            {confirm ? <ConfirmIcon name="check" /> : <Hide />}
          </Button>
        )}
      </HeaderTitle>
    </Container>
  );
}
