import React, { useEffect, useCallback, useState } from "react";
import {
  ActivityIndicator,
  Image,
  useWindowDimensions,
  View,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "styled-components";
import { api } from "../../services/api";

import { File } from "../../dtos/FileDTO";
import { Post, Photo } from "../../dtos/PhotoDTO";
import { Background } from "../../components/Background";
import { ButtonTabSelected } from "../../components/ButtonTabSelected";
import { DocumentCard } from "../../components/DocumentCard";
import { ProfileCard } from "../../components/ProfileCard";
import { PhotoCard } from "../../components/PhotoCard";
import { ModalViewPhoto } from "../../components/ModalViewPhoto";
import { ModalViewProfile } from "../../components/ModalViewProfile";
import {
  Container,
  Options,
  PhotosContainer,
  DocumentsContainer,
  DocumentsDivider,
  WithoutData,
  WithoutDataCircle,
  WithoutPhotosIcon,
  WithoutPhotosText,
  WithoutDocumentsIcon,
  WithoutDocumentsText,
} from "./styles";
import { Dimensions } from "react-native";
import { useRequest } from "../../hooks/requests";

export type DocumentProps = Document & {
  id: string;
};

export function Profile() {
  const [selectedPost, setSelectedPost] = useState<Post>({} as Post);
  const [isPostsEmpty, setIsPostsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDocumentsEmpty, setIsDocumentsEmpty] = useState(false);
  const [isActive, setIsActive] = useState<"photos" | "documents">("photos");
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);

  const [index, setIndex] = useState(0);
  const [routes] = useState([{ key: "first" }, { key: "second" }]);

  const {
    posts,
    documents,
    loading,
    loadingMore,
    fetchProfilePosts,
    fetchProfilePostsMore,
    fetchProfileDocuments,
  } = useRequest();

  const theme = useTheme();

  const firstRoute = useCallback(
    () =>
      isLoading ? (
        <ActivityIndicator
          style={{ marginTop: 40 }}
          size="large"
          color={theme.colors.primary}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <PhotosContainer
            data={posts}
            contentContainerStyle={{ flexGrow: 1 }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PhotoCard
                post={item}
                loading={loading}
                onPress={() => handlePhotoModal(item)}
              />
            )}
            onEndReachedThreshold={0.3}
            onEndReached={({ distanceFromEnd }) =>
              fetchProfilePhotosMore(distanceFromEnd)
            }
            ListEmptyComponent={renderEmptyPhotoListComponent()}
            ListFooterComponent={
              loadingMore ? (
                <ActivityIndicator color={theme.colors.primary} />
              ) : null
            }
          />
        </View>
      ),
    [posts]
  );

  const secondRoute = useCallback(
    () =>
      isLoading ? (
        <ActivityIndicator
          style={{ marginTop: 40 }}
          size="large"
          color={theme.colors.primary}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <DocumentsContainer
            data={documents}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <DocumentCard document={item} loading={loading} />
            )}
            ItemSeparatorComponent={() => <DocumentsDivider />}
            ListEmptyComponent={renderEmptyDocumentListComponent()}
          />
        </View>
      ),
    [documents]
  );

  const getTabBarIcon = (props: any) => {
    const { route } = props;

    if (route.key === "first") {
      return (
        <Ionicons
          name="images-outline"
          size={25}
          color={!props.focused ? theme.colors.shape : theme.colors.success}
        />
      );
    } else {
      return (
        <Ionicons
          name="documents-outline"
          size={25}
          color={!props.focused ? theme.colors.shape : theme.colors.success}
        />
      );
    }
  };

  const fetchDocuments = async () => {
    try {
      await fetchProfileDocuments();
      isDocumentsEmptyConfig();
    } catch (err) {
      console.log(err);
    }
  };

  const isDocumentsEmptyConfig = () => {
    if (documents.length === 0) {
      setIsDocumentsEmpty(true);
    }
  };

  const fetchPosts = async () => {
    try {
      await fetchProfilePosts();
      isPostsEmptyConfig();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfilePhotosMore = async (distance: number) => {
    await fetchProfilePostsMore(distance);
  };

  const isPostsEmptyConfig = () => {
    if (posts.length === 0) {
      setIsPostsEmpty(true);
    }
  };

  const renderEmptyPhotoListComponent = () => (
    <WithoutData>
      <WithoutDataCircle>
        <WithoutPhotosIcon name="camera-outline" />
      </WithoutDataCircle>
      <WithoutPhotosText>Ainda não há comprovantes</WithoutPhotosText>
    </WithoutData>
  );

  const renderEmptyDocumentListComponent = () => (
    <WithoutData>
      <WithoutDataCircle>
        <WithoutDocumentsIcon name="documents" />
      </WithoutDataCircle>
      <WithoutDocumentsText>Ainda não há resumos</WithoutDocumentsText>
    </WithoutData>
  );

  const handlePhotoModal = (item: Post) => {
    setSelectedPost(item);
    setOpenModal(true);
  };
  const handleCloseProfileModal = () => {
    setOpenProfileModal(false);
  };

  useEffect(() => {
    fetchPosts();
    fetchDocuments();
    setIsLoading(false);
  }, []);

  return (
    <Background>
      <Container>
        <ProfileCard
          title="Editar Perfil"
          onPress={() => setOpenProfileModal(true)}
        />
        <TabView
          style={{ marginTop: 5 }}
          navigationState={{ index, routes }}
          renderScene={({ route }) => {
            switch (route.key) {
              case "first":
                return firstRoute();
              default:
                return secondRoute();
            }
          }}
          onIndexChange={setIndex}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              style={{ backgroundColor: "transparent" }}
              indicatorStyle={{ backgroundColor: theme.colors.success }}
              renderIcon={(props) => getTabBarIcon(props)}
              labelStyle={{ backgroundColor: "transparent" }}
            />
          )}
        />
      </Container>
      <ModalViewPhoto
        post={selectedPost}
        visible={openModal}
        closeModal={() => setOpenModal(false)}
      />

      <ModalViewProfile
        visible={openProfileModal}
        closeModal={handleCloseProfileModal}
      />
    </Background>
  );
}
