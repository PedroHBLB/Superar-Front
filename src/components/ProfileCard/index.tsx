import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import ImageView from "react-native-image-viewing";
import { api } from "../../services/api";
import { useTheme } from "styled-components";

import { Header } from "../Header";
import { useAuth } from "../../hooks/auth";
import { ButtonOutline } from "../ButtonOutline";
import { OwnRankingLoad } from "../OwnRankingLoad";
import {
  Container,
  ProfileInfo,
  ProfiliePhotoContainer,
  ProfilePhotoButton,
  Photo,
  ProfileEffort,
  ProfilePoints,
  ProfileRank,
  Name,
  Setor,
  Footer,
} from "./styles";
import { ModalViewProfile } from "../ModalViewProfile";

type Props = {
  title: string;
  onPress?: (status: boolean) => void;
};

export function ProfileCard({ title, onPress }: Props) {
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);

  const { colaborador, ranking } = useAuth();
  const theme = useTheme();

  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };

  return (
    <Container>
      <Header />
      <ProfileInfo>
        <ProfiliePhotoContainer>
          <ProfilePhotoButton onPress={() => setIsVisible(true)}>
            {colaborador.data.avatar && (
              <Photo
                source={{
                  uri: colaborador.data.avatar,
                }}
                resizeMode="cover"
              />
            )}
          </ProfilePhotoButton>
        </ProfiliePhotoContainer>
        <ProfileEffort>
          <ProfilePoints>
            {loading ? (
              <ActivityIndicator size="small" color={theme.colors.primary} />
            ) : (
              ranking?.pontuacao_do_mes
              //0
            )}{" "}
            pontos
          </ProfilePoints>
          <ProfileRank>
            No.{" "}
            {loading ? (
              <ActivityIndicator size="small" color={theme.colors.primary} />
            ) : (
              ranking?.pos
              //1
            )}
          </ProfileRank>
        </ProfileEffort>
      </ProfileInfo>
      <Name>{colaborador.data.nome}</Name>
      <Setor>{colaborador.data.setor}</Setor>
      <Footer>
        <ButtonOutline title={title} onPress={onPress} />
      </Footer>
      <ImageView
        images={[
          {
            uri: colaborador.data.avatar,
          },
        ]}
        imageIndex={0}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      />
      <ModalViewProfile
        visible={openProfileModal}
        closeModal={handleCloseProfileModal}
      />
    </Container>
  );
}
