import React from "react";
import { Control, Controller } from "react-hook-form";

import { Container, Error } from "./styles";
import { Input } from "../Input";
import { KeyboardTypeOptions } from "react-native";

type Props = {
  control: Control;
  name: string;
  error: string;
  label: string;
  placeholder: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  right?: JSX.Element;
};

export function InputForm({
  control,
  name,
  error,
  placeholder,
  label,
  autoCapitalize = "none",
  keyboardType = "default",

  secureTextEntry = false,
  right,
}: Props) {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            label={label}
            placeholder={placeholder}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            value={value}
            onChange={onChange}
            right={right}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
