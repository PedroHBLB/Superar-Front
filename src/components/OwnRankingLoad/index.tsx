import React from "react";
import LottieView from "lottie-react-native";

import ownRankingLoad from "../../assets/ownRankingLoad.json";

import { Container, LottieContainer } from "./styles";

export function OwnRankingLoad() {
  return (
    <Container>
      <LottieContainer>
        <LottieView
          source={ownRankingLoad}
          resizeMode="contain"
          autoPlay
          loop
        />
      </LottieContainer>
    </Container>
  );
}
