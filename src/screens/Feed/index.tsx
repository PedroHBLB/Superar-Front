import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  RefreshControl,
  Text,
} from "react-native";

import SuperarSvg from "../../assets/superar-para-inovar.svg";
import { Header } from "../../components/Header";
import { Background } from "../../components/Background";
import { Divider } from "../../components/Divider";
import { FeedCard, FeedCardProps } from "../../components/FeedCard";
import { Container, FeedContainer, SvgContainer, Svg } from "./styles";
import { ModalViewSend } from "../../components/ModalViewSend";
import { api } from "../../services/api";
import { Post } from "../../dtos/PhotoDTO";
import { useTheme } from "styled-components";

export type FeedCardListProps = FeedCardProps & {
  id: string;
};

export function Feed() {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [feed, setFeed] = useState<Post[]>([]);

  const theme = useTheme();

  const refreshFeed = async () => {
    setIsRefreshing(true);
    try {
      const { data } = await api.get(
        `/colaboradores/isAvailable?_page=1&limit=8`
      );

      setFeed(data);
      setPage(1);
      setIsRefreshing(false);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchFeed = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(
        `/colaboradores/isAvailable?_page=${page}&limit=${limit}`
      );

      if (!data) {
        setLoading(true);
      }

      if (page > 1) {
        setFeed((oldState) => [...oldState, ...data]);
      } else {
        setFeed(data);
      }
      setLoading(false);
      setLoadingMore(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchFeedMore = async (distance: number) => {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((oldValue) => oldValue + 1);
    fetchFeed();
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <Background>
      <Container>
        <Header />
        <Divider type="feed" />
        <SvgContainer>
          <SuperarSvg
            width={Dimensions.get("window").width / 3}
            height={Dimensions.get("window").height / 8}
            opacity={0.4}
          />
        </SvgContainer>
        <FeedContainer
          data={feed}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={refreshFeed}
              colors={[theme.colors.primary]}
              tintColor={theme.colors.primary}
            />
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <FeedCard data={item} loading={loading} />}
          onEndReachedThreshold={0.4}
          onEndReached={({ distanceFromEnd }) => fetchFeedMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ? (
              <ActivityIndicator color={theme.colors.primary} />
            ) : null
          }
        />
      </Container>
    </Background>
  );
}
