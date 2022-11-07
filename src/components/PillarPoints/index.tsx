import React from "react";

import { Container, ScoreText, Pillar } from "./styles";

type Props = {
  score: number;
  pillar: string;
  border?: boolean;
};

export function PillarPoints({ score, pillar, border = true }: Props) {
  return (
    <Container border={border}>
      <ScoreText>{score}</ScoreText>
      <Pillar>{pillar}</Pillar>
    </Container>
  );
}
