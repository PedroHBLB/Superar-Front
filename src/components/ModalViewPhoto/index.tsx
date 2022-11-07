import React from "react";
import Modal from "react-native-modal";
import { Image } from "react-native-expo-image-cache";
import { Entypo } from "@expo/vector-icons";

import { ptBR } from "date-fns/esm/locale";
import { useAuth } from "../../hooks/auth";
import { differenceInMinutes, addHours, Interval, format } from "date-fns";

import { Photo, Post } from "../../dtos/PhotoDTO";
import { Background } from "../Background";
import {
  styles,
  ModalWrapper,
  Bar,
  Content,
  SubtitleContainer,
  Subtitle,
  SubtitleText,
  PhotoContent,
  PhotoStatus,
  PhotoInfo,
  Likes,
  Date,
  Status,
  Footer,
  Title,
  CommentsContainer,
  Comments,
  Comment,
  Author,
  CommentText,
} from "./styles";
import theme from "../../global/styles/theme";
import { parseISO } from "date-fns/esm";
import { ImagesSlider } from "../ImagesSlider";
import { calculateTime } from "../../utils/calculateTime";

type Props = {
  post: Post;
  visible: boolean;
  closeModal: () => void;
};

export function ModalViewPhoto({ post, visible, closeModal }: Props) {
  const { colaborador } = useAuth();

  // const length = 5;
  const date = visible ? calculateTime(post.pilar.data_inclusao) : "";

  return (
    <Modal
      isVisible={visible}
      style={styles.modal}
      onBackdropPress={closeModal}
      backdropTransitionOutTiming={50}
      swipeDirection={["down"]}
      onSwipeComplete={closeModal}
      propagateSwipe={true}
    >
      <ModalWrapper>
        <Background border>
          <Bar />
          <Content>
            <SubtitleContainer>
              <Subtitle>Legenda: </Subtitle>
              <SubtitleText>{post?.legenda}</SubtitleText>
            </SubtitleContainer>
            <PhotoContent>
              <ImagesSlider photos={post?.photos} />
            </PhotoContent>
            <PhotoStatus>
              <Date>{date}</Date>
              <Status status={post?.pilar?.status}>
                ● {post?.pilar?.status}
              </Status>
            </PhotoStatus>
          </Content>
        </Background>
      </ModalWrapper>
    </Modal>
  );
}
