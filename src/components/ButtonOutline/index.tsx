import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { ButtonContainer, Button, Title } from "./styles";

type Props = RectButtonProps & {
  title: string;
};

export function ButtonOutline({ title, ...rest }: Props) {
  return (
    <ButtonContainer>
      <Button {...rest}>
        <Title>{title}</Title>
      </Button>
    </ButtonContainer>
  );
}
