import React from "react";
import { Post } from "../../dtos/PhotoDTO";
import { calculateTime } from "../../utils/calculateTime";
import { ImagesSlider } from "../ImagesSlider";

import {
  Container,
  Header,
  ProfilePhoto,
  Name,
  ImageContainer,
  Footer,
  Subtitle,
  SubtitleAuthor,
  SubtitleText,
  Time,
} from "./styles";

type User = {
  name: string;
  profile_photo: string;
};

export type FeedCardProps = {
  user: User;
  post_photo: string;
  likes: number;
  subtitle: string;
  time: string;
};

type Props = {
  data: Post;
  loading: boolean;
};

export function FeedCard({ data, loading }: Props) {
  const time = calculateTime(data?.pilar.data_inclusao);
  return (
    <Container>
      <Header>
        <ProfilePhoto source={{ uri: data.pilar.colaborador?.avatar }} />
        <Name>{data.pilar.colaborador?.nome}</Name>
      </Header>
      <ImageContainer>
        <ImagesSlider photos={data.photos} />
      </ImageContainer>
      <Footer>
        <Subtitle>
          <SubtitleAuthor>{data.pilar.colaborador?.nome}</SubtitleAuthor>
          <SubtitleText> {data.legenda}</SubtitleText>
        </Subtitle>
        <Time>{time}</Time>
      </Footer>
    </Container>
  );
}
