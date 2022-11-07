import React from "react";
import LottieView from "lottie-react-native";

import rankingLoad from "../../assets/rankingLoad.json";

import { Container, LottieContainer } from "./styles";

export function RankingLoad() {
  return (
    <Container>
      <LottieContainer>
        <LottieView
          source={rankingLoad}
          resizeMode="contain"
          autoPlay
          loop
          speed={1.2}
        />
      </LottieContainer>
    </Container>
  );
}
