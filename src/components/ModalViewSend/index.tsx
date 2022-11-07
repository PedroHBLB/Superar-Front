import React from "react";
import Modal from "react-native-modal";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { Background } from "../Background";
import { CategoryButton } from "../CategoryButton";

import {
  styles,
  ModalWrapper,
  Bar,
  ButtonsContainer,
  InitialDivider,
} from "./styles";

type Request = {
  title: string;
  type: string;
};

type Props = {
  closeModal: () => void;
  visible: boolean;
};

export function ModalViewSend({ closeModal, visible }: Props) {
  const theme = useTheme();
  const navigation = useNavigation();
  const category = {
    resumo: {
      title: "Enviar Resumo",
      type: "resumo",
    },
    comprovante: {
      title: "Enviar Comprovante",
      type: "comprovante",
    },
    lessonlearned: {
      title: "Enviar LL",
      type: "ll",
    },
    inovacao: {
      title: "Enviar Inovação",
      type: "inovacao",
    },
  };

  function handleNavigationRequest(category: Request) {
    closeModal();

    setTimeout(function navigate() {
      navigation.navigate("Requests", category);
    }, 300);
  }

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={closeModal}
      backdropTransitionOutTiming={50}
      style={styles.modal}
      swipeDirection={["down"]}
      onSwipeComplete={closeModal}
    >
      <ModalWrapper>
        <Background border>
          <Bar />
          <ButtonsContainer>
            <InitialDivider />
            <CategoryButton
              title="Enviar Resumo"
              navigation={() => handleNavigationRequest(category.resumo)}
            >
              <Ionicons
                name="ios-documents-outline"
                size={25}
                color={theme.colors.shape}
              />
            </CategoryButton>
            <CategoryButton
              title="Enviar Comprovante"
              navigation={() => handleNavigationRequest(category.comprovante)}
            >
              <Ionicons
                name="ios-images-outline"
                size={25}
                color={theme.colors.shape}
              />
            </CategoryButton>
            <CategoryButton
              title="Enviar Lesson Learned"
              navigation={() => handleNavigationRequest(category.lessonlearned)}
            >
              <SimpleLineIcons
                name="graduation"
                size={25}
                color={theme.colors.shape}
              />
            </CategoryButton>
            <CategoryButton
              title="Enviar Inovação"
              navigation={() => handleNavigationRequest(category.inovacao)}
            >
              <MaterialCommunityIcons
                name="lightbulb-on-outline"
                size={25}
                color={theme.colors.shape}
              />
            </CategoryButton>
          </ButtonsContainer>
        </Background>
      </ModalWrapper>
    </Modal>
  );
}
