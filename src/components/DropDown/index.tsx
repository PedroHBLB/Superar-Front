import React from "react";
import Modal from "react-native-modal";

import {
  Container,
  ButtonsContainer,
  ButtonContainer,
  Button,
  ButtonTitle,
  styles,
} from "./styles";

type Props = {
  isVisible: boolean;
  handleColaboradorOption: (key: string) => void;
  closeModal: () => void;
  keys: string[];
};

export function DropDown({
  isVisible,
  handleColaboradorOption,
  closeModal,
  keys,
}: Props) {
  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      animationIn={"fadeInUp"}
      animationOut={"fadeOutDown"}
      backdropTransitionInTiming={100}
      backdropTransitionOutTiming={50}
      animationInTiming={500}
      animationOutTiming={100}
      onBackdropPress={closeModal}
    >
      <Container>
        <ButtonsContainer>
          {keys.map((key, index) => (
            <ButtonContainer key={String(index)}>
              <Button onPress={() => handleColaboradorOption(key)}>
                <ButtonTitle>{key}</ButtonTitle>
              </Button>
            </ButtonContainer>
          ))}
        </ButtonsContainer>
      </Container>
    </Modal>
  );
}
