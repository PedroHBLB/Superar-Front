import React from "react";
import { Image } from "react-native-expo-image-cache";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "styled-components";

import { PressableProps } from "react-native";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
import { LinearGradient } from "expo-linear-gradient";

import { Container, Icon, styles } from "./styles";
import { Photo, Post } from "../../dtos/PhotoDTO";

export type Props = PressableProps & {
  post: Post;
  loading: boolean;
};

export function PhotoCard({ post, loading, ...rest }: Props) {
  const { colaborador } = useAuth();
  const theme = useTheme();
  const preview = {
    uri: theme.preview,
  };
  const { uri } = post?.photos[0];
  const myHeaders = {
    Authorization: `Bearer ${colaborador.access_token}`,
  };
  return (
    <Container {...rest}>
      <Image
        style={styles.image}
        uri={uri}
        preview={preview}
        options={{ headers: myHeaders }}
        transitionDuration={300}
      />
      {post?.photos?.length > 1 && <Icon name="checkbox-multiple-blank" />}
    </Container>
  );
}
