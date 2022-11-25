import React, { useEffect, useState } from "react";
import { Platform } from "react-native";
import { api } from "../../services/api";

import mime from "mime";
import Toast from "react-native-root-toast";
import { RFValue } from "react-native-responsive-fontsize";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "styled-components";
import { useRoute } from "@react-navigation/native";
import * as WebBrowser from "expo-web-browser";
import * as DocumentPicker from "expo-document-picker";

import { Background } from "../../components/Background";
import { AboutHeader } from "../../components/AboutHeader";
import { requests } from "../../utils/requests";
import { DropDown } from "../../components/DropDown";
import { PhotoContainer } from "../../components/PhotoContainer";
import { DocumentContainer } from "../../components/DocumentContainer";
import { Video } from 'expo-av';

import SuperarSvg from "../../assets/superar-para-inovar.svg";
import {
  RequestContainer,
  RequestContainerPillar,
  Container,
  ModalContainer,
  ModalButton,
  ChosenCategory,
  ChosenIcon,
  Category,
  CategoryTitle,
  RequestTitle,
  Subtitle,
  SubtitleTitle,
  Title,
  Limit,
  SubtitleText,
  LessonLearnedLink,
  Footer,
  CheckboxIsAvailable,
  CheckboxContainer,
  CheckboxIcon,
  CheckboxText,
  View,
} from "./styles";
import { Checkbox } from "react-native-paper";
import { useRequest } from "../../hooks/requests";

export type CategoryType = {
  label: string;
  value: string;
};

export type Asset = {
  id: string;
  filename: string;
  uri: string;
  localUri: string;
  width: number;
  height: number;
  creationTime?: Date;
  modificationTime?: Date;
};

export type Document = {
  name: string;
  size: number;
  uri: string;
};

type Params = {
  title: string;
  type: string;
  data: Asset[];
};

export function Requests() {
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState<Asset[]>([]);
  const [documents, setDocuments] = useState<Document>({} as Document);
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [showedCategory, setShowedCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [textTitle, setTextTitle] = useState("");
  const [text, setText] = useState("");
  const { colaborador } = useAuth();
  const { handleNewComprovante, handleNewDocument, handleNewInovacao } = useRequest();
  const theme = useTheme();
  const route = useRoute();
  const { title, type, data } = route.params as Params;
  const limit = type === "comprovante" ? 100 : 600;
  const [charNumber, setCharNumber] = useState(limit);

  const handleOpenLink = (link: string) => {
    WebBrowser.openBrowserAsync(link);
  };

  const handleText = (text: string) => {
    setCharNumber(limit - text.length);
    setText(text);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleOpenDocuments = async () => {
    setLoading(true);
    const document = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: false,
    });

    if (document.type === "cancel") {
      setLoading(false);
      return;
    }
    setDocuments(document);
    setLoading(false);
  };

  const handleRemoveDocuments = () => {
    setDocuments({} as Document);
  };

  const handleColaboradorCategory = (key: string) => {
    const selected = category.find((item) => item.label === key);
    if (!selected) return;
    setSelectedCategory(selected.value);
    setShowedCategory(selected.label);
    if (selected.value === "lecture") {
      setText("lecture");
      setTextTitle("lecture");
    }
    handleModalClose();
  };

  const handleRemoveImage = (id: string) => {
    setImages((oldState) => oldState.filter((image) => image.id !== id));
  };

  const loadCategory = () => {
    if (type === "resumo") return setCategory(requests.resumo.categories);
    else if (type === "comprovante")
      return setCategory(requests.comprovante.categories);
  };

  const handleToast = (message: string, color: string) => {
    return Toast.show(message, {
      position: Toast.positions.BOTTOM,
      backgroundColor: color,
      textStyle: {
        fontSize: RFValue(15),
      },
      containerStyle: {
        borderRadius: RFValue(30),
        paddingVertical: RFValue(10),
        paddingHorizontal: RFValue(25),
      },
    });
  };

  const handleSendDocument = async () => {
    if (
      !selectedCategory ||
      Object.keys(documents).length === 0 ||
      !text ||
      !textTitle
    ) {
      return handleToast("Campos não preenchidos❕", theme.colors.toast_error);
    }

    const newDocument = {
      categoria: selectedCategory,
      titulo: textTitle,
      descricao: text,
    };
    try {
      setLoading(true);

      const { data } = await api.post("/pilares/conhecimento", newDocument);

      const newDocumentToUpload = new FormData();

      newDocumentToUpload.append(
        "file",
        JSON.parse(
          JSON.stringify({
            uri: documents.uri,
            type: "application/pdf",
            name: documents.name,
          })
        )
      );

      images.forEach((image) => {
        if (
          mime.getType(image.localUri) === "image/heic" ||
          mime.getType(image.localUri) === "video/quicktime"
        ) {
          newDocumentToUpload.append(
            "file",
            JSON.parse(
              JSON.stringify({
                uri: image.uri,
                type: mime.getType(image.uri),
                name: image.filename,
              })
            )
          );
        } else {
          newDocumentToUpload.append(
            "file",
            JSON.parse(
              JSON.stringify({
                uri: image.localUri,
                type: mime.getType(image.localUri),
                name: image.filename,
              })
            )
          );
        }
      });

      const url = `/pilares/conhecimento/document?conhecimento_id=${data}`;

      let verifica = true;
      for(let i = 0; i <= 3; i++){
        console.log(`For: ${i}`);
        await api
        .post(url, newDocumentToUpload)
        .then((response) => {
          setText("");
          setTextTitle("");
          setDocuments({} as Document);
          setImages([]);
          setShowedCategory("");
          setSelectedCategory("");
          setCharNumber(limit);

          // console.log(response.data);
          handleNewDocument(response.data);
          verifica = false;
          return handleToast(
            "Enviado com sucesso❕",
            theme.colors.toast_success
          );
        })
        .catch((error) => {
          return handleToast(
            "Não foi possível enviar,\ntente novamente mais tarde!",
            theme.colors.toast_error
          );
        });
        if(verifica !== true){
          break;
        }
      }
    } catch (error: any) {
      return handleToast(
        "Não foi possível enviar,\ntente novamente mais tarde!",
        theme.colors.toast_error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSendComprovante = async () => {
    if (!selectedCategory || images.length === 0 || !text) {
      return handleToast("Campos não preenchidos❕", theme.colors.toast_error);
    }
    const newComprovante = {
      categoria: selectedCategory,
      legenda: text,
      isAvailable: isChecked,
    };

    const newDonateComprovante = {
      nome: "rsi",
      descricao: text,
      categoria: selectedCategory,
      legenda: text,
      isAvailable: isChecked,
    };
    try {
      setLoading(true);
      let url = "/pilares/saude";
      if (selectedCategory === "donate") url = "/pilares/interno";

      const { data } = await api.post(
        url,
        selectedCategory === "donate" ? newDonateComprovante : newComprovante
      );

      const newImagesToUpload = new FormData();

      images.forEach((image) => {
        if (
          mime.getType(image.localUri) === "image/heic" ||
          mime.getType(image.localUri) === "video/quicktime"
        ) {
          newImagesToUpload.append(
            "image",
            JSON.parse(
              JSON.stringify({
                uri: image.uri,
                type: mime.getType(image.uri),
                name: image.filename,
              })
            )
          );
        } else {
          newImagesToUpload.append(
            "image",
            JSON.parse(
              JSON.stringify({
                uri: image.localUri,
                type: mime.getType(image.localUri),
                name: image.filename,
              })
            )
          );
        }
      });
      console.log(newImagesToUpload);

      url = `/pilares/saude/photos?post_id=${data}`;
      if (selectedCategory === "donate")
        url = `/pilares/interno/photo?interno_id=${data}`;
      // url = `/pilares/saude/photos?post_id=${data}`;

      if (selectedCategory !== "donate") {
        let verfifica = true;
        for(let i = 0; i <= 3; i++){
          console.log(`For: ${i}`);
          await api
          .post(url, newImagesToUpload, 
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
            )
          .then((response) => {
              setText("");
              setImages([]);
              setShowedCategory("");
              setSelectedCategory("");
              setCharNumber(limit);
  
              console.log(response.data);
              console.log("Passei!");
              handleNewComprovante(response.data);
              verfifica = false;
              return handleToast(
                "Enviado com sucesso❕",
                theme.colors.toast_success
              );
          })
          .catch((error) => {
            console.log(error);
            console.log("Não passei!");
            return handleToast(
              "Não foi possível enviar,\ntente novamente mais tarde!",
              theme.colors.toast_error
            );
          });
          if(verfifica !== true){
            break;
          } 
        }
      } 
      
      else if (selectedCategory === "donate") {
        let verfifica = true;
        for(let i = 0; i <= 3; i++){
          console.log(`For: ${i}`);
          await api
          .patch(url, newImagesToUpload)
          .then((response) => {
            setText("");
            setImages([]);
            setShowedCategory("");
            setSelectedCategory("");
            setCharNumber(limit);

            // console.log(response.data);
            handleNewComprovante(response.data);
            verfifica = false;
            return Toast.show("Enviado com sucesso!", {
              position: Toast.positions.BOTTOM,
              backgroundColor: theme.colors.toast_success,
              textStyle: {
                fontSize: RFValue(15),
              },
              containerStyle: {
                borderRadius: RFValue(30),
                paddingVertical: RFValue(15),
                paddingHorizontal: RFValue(25),
              },
            });
          })
          .catch((error) => {
            handleToast(
              "Não foi possível enviar,\ntente novamente mais tarde!",
              theme.colors.toast_error
            );
          });
          if(verfifica !== true){
            break;
          } 
        }
      }
    } catch (err: any) {
      console.log(err);
      return handleToast(
        "Não foi possível enviar,\ntente novamente mais tarde!",
        theme.colors.toast_error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSendInovacao = async () => {
    if (!textTitle || !text) {
      return handleToast("Campos não preenchidos❕", theme.colors.toast_error);
    }

    const newInovacao = {
      // categoria: selectedCategory,
      titulo: textTitle,
      descricao: text,
    }

    try {
      setLoading(true);

      const { data } = await api.post("/pilares/inovacao", newInovacao);

      const newInovacaoToSend = {
        // categoria: selectedCategory,
        titulo: textTitle,
        descricao: text,
      }
      let url = `${data}`
      if (selectedCategory === "inovacao") {
        await api
          .post(url, newInovacaoToSend)
          .then((response) => {
            setTextTitle("");
            setText("");

            console.log("Passei!")
            handleNewInovacao(response.data);
            return handleToast(
              "Enviado com sucesso❕",
              theme.colors.toast_success
            );
          })
          .catch((error) => {
            console.log("Passei não!")
            return handleToast(
              "Não foi possível enviar,\ntente novamente mais tarde!",
              theme.colors.toast_error
            );
          })
      }
    } catch (error: any) {
      console.log("Estou aqui");
      return handleToast(
        "Não foi possível enviar,\ntente novamente mais tarde!",
        theme.colors.toast_error
      );
    } finally {
      console.log("Estou aqui agora");
      setLoading(false);
      return handleToast(
        "Enviado com sucesso❕",
        theme.colors.toast_success
      );
    }
  }
  useEffect(() => {
    loadCategory();
    if (!data) return setImages([] as Asset[]);
    const results = data.filter(
      ({ id: id1 }) => !images.some(({ id: id2 }) => id2 === id1)
    );
    const newImages: Asset[] = [...results];

    setImages((oldState) => [...oldState, ...newImages]);
  }, [data]);


  return (
    <>
      <Background>
        <KeyboardAwareScrollView>
          <Container>
            <AboutHeader
              title={title}
              loading={loading}
              confirm={
                type === "comprovante" || type === "resumo" || type === "inovacao" ? true : false
              }
              handleSendForms={
                type === "inovacao"
                  ? handleSendInovacao
                  : type === "comprovante"
                    ? handleSendComprovante
                    : handleSendDocument
              }
            />
            <RequestContainer>
              {type !== "ll" ? (
                <RequestContainerPillar>
                  {(type === "resumo" || type === "comprovante") && (
                    <Category>
                      <CategoryTitle>Selecione a categoria</CategoryTitle>
                      <ModalContainer isActive={isModalOpen}>
                        <ModalButton onPress={handleModalOpen}>
                          <ChosenCategory>{showedCategory}</ChosenCategory>
                          <ChosenIcon name="caretdown" isActive={isModalOpen} />
                        </ModalButton>
                      </ModalContainer>
                      <DropDown
                        isVisible={isModalOpen}
                        closeModal={handleModalClose}
                        handleColaboradorOption={handleColaboradorCategory}
                        keys={category.map((item) => item.label)}
                      />
                    </Category>
                  )}
                  {type === "comprovante" && (
                    <PhotoContainer
                      images={images}
                      type={selectedCategory}
                      length={images.length}
                      handleRemoveImage={handleRemoveImage}
                    />
                  )}
                  {type === "resumo" && selectedCategory === "lecture" && (
                    <PhotoContainer
                      images={images}
                      type={selectedCategory}
                      length={images.length}
                      handleRemoveImage={handleRemoveImage}
                    />
                  )}
                  {type === "resumo" && (
                    <DocumentContainer
                      document={documents}
                      handleRemoveDocuments={handleRemoveDocuments}
                      handleOpenDocuments={handleOpenDocuments}
                      loading={loading}
                    />
                  )}
                  {((type === "resumo" && selectedCategory !== "lecture") ||
                    type === "inovacao") && (
                      <RequestTitle
                        value={textTitle}
                        maxLength={100}
                        placeholder="Título"
                        placeholderTextColor={theme.colors.shape_light_opacity100}
                        onChangeText={(text) => setTextTitle(text)}
                      />
                    )}
                  {selectedCategory !== "lecture" && (
                    <Subtitle>
                      <SubtitleTitle>
                        <Title>
                          {type === "comprovante" ? "Legenda" : "Descrição"}
                        </Title>
                        <Limit>{charNumber} caracteres</Limit>
                      </SubtitleTitle>
                      <SubtitleText
                        value={text}
                        type={type}
                        maxLength={limit}
                        numberOfLines={type === "comprovante" ? 5 : 12}
                        style={{ textAlignVertical: "top" }}
                        onChangeText={(text) => handleText(text)}
                      />
                      {type === "comprovante" && (
                        <CheckboxIsAvailable>
                          {Platform.OS !== "ios" ? (
                            <Checkbox
                              status={isChecked ? "checked" : "unchecked"}
                              onPress={() => setIsChecked(!isChecked)}
                              uncheckedColor={theme.colors.shape}
                              color={theme.colors.primary}
                            />
                          ) : (
                            <CheckboxContainer
                              toggleCheckBox={isChecked}
                              onPress={() => setIsChecked(!isChecked)}
                            >
                              {isChecked && <CheckboxIcon name="check" />}
                            </CheckboxContainer>
                          )}
                          <CheckboxText>
                            Permitir publicação no feed após aprovação?
                          </CheckboxText>
                        </CheckboxIsAvailable>
                      )}
                    </Subtitle>
                  )}
                </RequestContainerPillar>
              ) : (
                <RequestContainerPillar>
                  <LessonLearnedLink
                    onPress={() =>
                      handleOpenLink(
                        "https://spiintegradora.sharepoint.com/Wiki/Treinamento%20de%20PMtoolBox.aspx"
                      )
                    }
                  >
                    Acessar o Vídeo Tutorial
                  </LessonLearnedLink>
                  <LessonLearnedLink
                    onPress={() =>
                      handleOpenLink("https://spi.bpsinternet.com.br/")
                    }
                  >
                    Acessar o PmToolBox
                  </LessonLearnedLink>
                  <Video 
                  style={{
                    justifyContent: 'center', 
                    alignSelf: 'center', 
                    width: 400, 
                    height: 300,
                    borderWidth: 2,
                    borderColor: theme.colors.primary,
                  }}
                    resizeMode="contain"
                    useNativeControls ={true}
                    source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}}/>
                </RequestContainerPillar>
              )}
            </RequestContainer>
          </Container>
        </KeyboardAwareScrollView>
      </Background>
      {type === "ll" && (
        <Footer>
          <SuperarSvg width={135} height={89} opacity={0.4} />
        </Footer>
      )}
    </>
  );
}
