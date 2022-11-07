import React from "react";

import { FilterButton, FilterTitle } from "./styles";

type Props = {
  nome: "TODOS" | "ADM" | "AT" | "IC" | "IT" | "OT" | "PMO" | "SUL" | "VENDAS";
  filter:
    | "TODOS"
    | "ADM"
    | "AT"
    | "IC"
    | "IT"
    | "OT"
    | "PMO"
    | "SUL"
    | "VENDAS";
  onPress: (
    value:
      | "TODOS"
      | "ADM"
      | "AT"
      | "IC"
      | "IT"
      | "OT"
      | "PMO"
      | "SUL"
      | "VENDAS"
  ) => void;
};
export function FilterCard({ nome, filter, onPress }: Props) {
  return (
    <FilterButton
      enabled={filter !== nome}
      isFilter={filter === nome}
      onPress={() => onPress(nome)}
    >
      <FilterTitle>{nome}</FilterTitle>
    </FilterButton>
  );
}
