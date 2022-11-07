import React, { ReactNode } from "react";
import Modal from "react-native-modal";
import { Background } from "../Background";

import {
  styles,
  PillarCard,
  ModalScrollView,
  ButtonContainer,
  IconButton,
  Icon,
} from "./styles";

type Props = {
  children: ReactNode;
  visible: boolean;
  closeModal: () => void;
};

export function ModalViewPillar({ children, visible, closeModal }: Props) {
  return (
    <Modal
      isVisible={visible}
      style={styles.modal}
      animationIn={"zoomInDown"}
      animationOut={"zoomOutUp"}
      animationInTiming={1000}
      animationOutTiming={1000}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={1000}
    >
      <PillarCard>
        <Background>
          <ButtonContainer>
            <IconButton onPress={closeModal}>
              <Icon name="cross" />
            </IconButton>
          </ButtonContainer>
          <ModalScrollView>{children}</ModalScrollView>
        </Background>
      </PillarCard>
    </Modal>
  );
}
