import React from "react";
import LottieView from "lottie-react-native";

import underConstruction from "../../assets/underconstruction.json";

import { Container } from "./styles";

export function UnderConstruction() {
  return (
    <Container>
      <LottieView
        source={underConstruction}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}
