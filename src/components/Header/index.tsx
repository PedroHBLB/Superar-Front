import React from "react";
import { ButtonSend } from "../ButtonSend";
import { ButtonSignOut } from "../ButtonSignOut";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <ButtonSignOut />
      <ButtonSend />
    </Container>
  );
}
