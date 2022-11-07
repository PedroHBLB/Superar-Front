import React from "react";
import { Load } from "../../screens/Load";
import { ButtonContainer, ButtonText } from "./styles";

type Props = {
  title: string;
  enabled?: boolean;
  onPress: () => void;
};

export function Button({ title, enabled = true, onPress }: Props) {
  return (
    <ButtonContainer onPress={onPress} enabled={enabled}>
      {!enabled ? <Load /> : <ButtonText>{title}</ButtonText>}
    </ButtonContainer>
  );
}
