import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Button, ButtonText } from "./styles";

type Props = TouchableOpacityProps & {
  children: ReactNode;
  title: string;
  navigation?: () => void;
};

export function CategoryButton({ children, title, navigation }: Props) {
  return (
    <Container>
      <Button onPress={navigation}>
        {children}
        <ButtonText>{title}</ButtonText>
      </Button>
    </Container>
  );
}
