import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from "react-native-modal";
import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/auth";
import { Background } from "../Background";
import { Image } from "react-native-expo-image-cache";
import {
  styles,
  ModalWrapper,
  Content,
  Header,
  BackButton,
  BackButtonTitle,
  Title,
  ConfirmContainer,
  ConfirmButton,
  ConfirmButtonTitle,
  ImageContainer,
  ImageButton,
  Photo,
  PhotoLink,
  UserDataWrapper,
  Data,
  ModalContainer,
  ModalButton,
  ChosenSetor,
  ChosenIcon,
  TextLabel,
  UserData,
  UserMessage,
} from "./styles";
import { DropDown } from "../DropDown";
import Toast from "react-native-root-toast";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  visible: boolean;
  closeModal: () => void;
};

export function ModalViewProfile({ visible, closeModal }: Props) {
  const { colaborador, updateColaborador } = useAuth();
  const theme = useTheme();

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState("");
  const [avatar, setAvatar] = useState(colaborador.data.avatar);
  const [nome, setNome] = useState(colaborador.data.nome);
  const [setor, setSetor] = useState(colaborador.data.setor);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleColaboradorSetor = (key: string) => {
    setSetor(key);
    handleModalClose();
  };

  const handleProfileUpdate = async () => {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome é obrigatório"),
        setor: Yup.string().required("Setor é obrigatório"),
      });

      const data = { nome, setor };
      await schema.validate(data);

      setIsLoading(true);
      await updateColaborador(avatar, nome, setor);
      setIsLoading(false);
      setResponse("Perfil Atualizado!");
      setTimeout(() => returnFromModal(), 500);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        Alert.alert("OPA!", error.message);
      } else {
        Alert.alert("Não foi possível atualizar o perfil");
      }
    }
  };

  const openImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (result.cancelled) return;

      setAvatar(result.uri);
    } catch (error: any) {
      console.log(error.message);
      Alert.alert("Erro", "Não foi possível acessar a galeria de fotos");
    }
  };

  const returnFromModal = () => {
    setResponse("");
    setAvatar(colaborador.data.avatar);
    setNome(colaborador.data.nome);
    setSetor(colaborador.data.setor);
    closeModal();
  };

  return (
    <Modal
      isVisible={visible}
      style={styles.modal}
      hasBackdrop={false}
      animationInTiming={700}
      animationOutTiming={700}
    >
      <ModalWrapper>
        <Background border>
          <KeyboardAwareScrollView>
            <>
              <Header>
                <BackButton onPress={!isLoading ? returnFromModal : () => {}}>
                  <BackButtonTitle>Cancelar</BackButtonTitle>
                </BackButton>
                <Title>Editar Perfil</Title>
                <ConfirmContainer>
                  <ConfirmButton
                    onPress={!isLoading ? handleProfileUpdate : () => {}}
                  >
                    {isLoading ? (
                      <ActivityIndicator
                        size="small"
                        color={theme.colors.success}
                      />
                    ) : (
                      <ConfirmButtonTitle>Concluir</ConfirmButtonTitle>
                    )}
                  </ConfirmButton>
                </ConfirmContainer>
              </Header>
              <Content>
                <ImageContainer>
                  <ImageButton onPress={openImagePicker}>
                    <Photo
                      source={{
                        uri: avatar,
                      }}
                    />
                  </ImageButton>
                  <PhotoLink onPress={openImagePicker}>
                    Alterar foto de perfil
                  </PhotoLink>
                </ImageContainer>
                <UserDataWrapper>
                  <Data>
                    <TextLabel>Nome</TextLabel>
                    <UserData
                      autoCapitalize="words"
                      editable={!isLoading}
                      selectTextOnFocus={!isLoading}
                      value={nome}
                      onChangeText={(value) => setNome(value)}
                    />
                  </Data>
                  <Data>
                    <TextLabel>Setor</TextLabel>
                    <ModalContainer isActive={isModalOpen}>
                      <ModalButton onPress={handleModalOpen}>
                        <ChosenSetor>{setor}</ChosenSetor>
                        <ChosenIcon name="caretdown" isActive={isModalOpen} />
                      </ModalButton>
                    </ModalContainer>
                    <DropDown
                      isVisible={isModalOpen}
                      closeModal={handleModalClose}
                      handleColaboradorOption={handleColaboradorSetor}
                      keys={[
                        "ADM",
                        "AT",
                        "IC",
                        "IT",
                        "OT",
                        "PMO",
                        "SUL",
                        "VENDAS",
                      ]}
                    />
                  </Data>
                  <Data>
                    <TextLabel>Email</TextLabel>
                    <UserData
                      editable={false}
                      selectTextOnFocus={false}
                      style={{ opacity: 0.5 }}
                    >
                      {colaborador.data.email}
                    </UserData>
                  </Data>
                  <Data>
                    <UserMessage>{response}</UserMessage>
                  </Data>
                  {/* <Data>
                    <TextLabel>Senha atual</TextLabel>
                    <UserData>●●●●●●●●●●●●●●</UserData>
                  </Data>
                  <Data>
                    <TextLabel>Nova senha</TextLabel>
                    <UserData>●●●●●●●●●●●●●●●●</UserData>
                  </Data>
                  <Data>
                    <TextLabel style={{ width: "50%" }}>
                      Nova senha novamente
                    </TextLabel>
                    <UserData>●●●●●●●●●●●●●●●●</UserData>
                  </Data> */}
                </UserDataWrapper>
              </Content>
            </>
          </KeyboardAwareScrollView>
        </Background>
      </ModalWrapper>
    </Modal>
  );
}
