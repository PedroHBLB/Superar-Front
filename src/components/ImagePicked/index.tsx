import React from "react";
import { PressableProps } from "react-native";

import { Container, Image, Icon } from "./styles";

type Props = PressableProps & {
  uri: string;
};

export function ImagePicked({ uri, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Image source={{ uri: uri }} />
      <Icon name="remove" />
    </Container>
  );
}
