import React, { useState } from "react";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import Modal from "react-native-modal";
import { useTheme } from "styled-components";

import { useAuth } from "../../hooks/auth";
import { Background } from "../Background";

import {
  SignOutButton,
  Icon,
  ModalWrapper,
  Title,
  Description,
  Options,
  ModalButton,
  ButtonTitle,
  styles,
} from "./styles";

type Props = BorderlessButtonProps;

export function ButtonSignOut({ ...rest }: Props) {
  const [visible, setVisible] = useState(false);
  const { signOut } = useAuth();
  const theme = useTheme();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <SignOutButton {...rest} onPress={() => setVisible(true)}>
        <Icon name="log-out" />
      </SignOutButton>
      <Modal
        isVisible={visible}
        style={styles.modal}
        animationIn={"tada"}
        animationOut={"fadeOut"}
        backdropTransitionOutTiming={50}
      >
        <ModalWrapper>
          <Title>Sair do Aplicativo</Title>
          <Description>Você realmente quer sair?</Description>
          <Options>
            <ModalButton onPress={handleSignOut}>
              <ButtonTitle>SIM</ButtonTitle>
            </ModalButton>
            <ModalButton onPress={() => setVisible(false)}>
              <ButtonTitle style={{ color: theme.colors.success }}>
                CANCELAR
              </ButtonTitle>
            </ModalButton>
          </Options>
        </ModalWrapper>
      </Modal>
    </>
  );
}
