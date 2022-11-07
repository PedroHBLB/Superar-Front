import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Asset } from "../../screens/Requests";
import { ImagePicked } from "../ImagePicked";

import {
  Container,
  IconsContainer,
  Icon,
  IconPlus,
  ImagesContainer,
  FilesContainer,
  ImageNumberContainer,
  ImageSubtitle,
  ImageNumber,
  ButtonsContainer,
  Button,
  Title,
} from "./styles";

type Props = {
  images: Asset[];
  length: number;
  type: string;
  handleRemoveImage: (id: string) => void;
};

export function PhotoContainer({
  images,
  type,
  length,
  handleRemoveImage,
}: Props) {
  const navigation = useNavigation();
  const disabled =
    type === "donate" || type === "lecture" || type === "alimentacao" || type === "exercise"
      ? length === 1
        ? true
        : false
      : length === 3
      ? true
      : false;

  function handleNavigationToAssets() {
    navigation.navigate("AssetsPicker", { length });
  }

  function handleNavigationToCamera() {
    navigation.navigate("CameraView");
  }

  return (
    <Container>
      {!images.length ? (
        <IconsContainer>
          <Icon name="camera-outline" />
          <IconPlus name="plus" />
        </IconsContainer>
      ) : (
        <ImagesContainer>
          <FilesContainer>
            {images.map(({ uri, id }: Asset) => {
              return (
                <ImagePicked
                  uri={uri}
                  key={id}
                  onPress={() => handleRemoveImage(id)}
                />
              );
            })}
          </FilesContainer>
          <ImageNumberContainer>
            <ImageSubtitle>Fotos/Vídeos: </ImageSubtitle>
            <ImageNumber length={images.length}>
              ({images.length}/{type === "donate" || type === "lecture" ? 1 : 3}
              )
            </ImageNumber>
          </ImageNumberContainer>
        </ImagesContainer>
      )}
      <ButtonsContainer>
        <Button onPress={handleNavigationToAssets} disabled={disabled}>
          <Title disabled={disabled}>Abrir galeria</Title>
        </Button>
        <Button onPress={handleNavigationToCamera} disabled={disabled}>
          <Title disabled={disabled}>Abrir câmera</Title>
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
