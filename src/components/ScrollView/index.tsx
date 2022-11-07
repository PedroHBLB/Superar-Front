import React, { ReactNode } from "react";
import { Container, TextArea } from "./styles";

type Props = {
  children: ReactNode;
};

export function ScrollView({ children }: Props) {
  return (
    <Container>
      <TextArea>{children}</TextArea>
    </Container>
  );
}
