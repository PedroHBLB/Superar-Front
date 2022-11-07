import React from "react";
import { KeyboardTypeOptions } from "react-native";
import { TextInput } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  secureTextEntry: boolean;
  autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined;
  keyboardType: KeyboardTypeOptions;
  onChange: (value: string) => void;
  right?: JSX.Element;
}

export function Input({
  label,
  placeholder,
  value,
  secureTextEntry,
  autoCapitalize,
  keyboardType,
  onChange,
  right,
}: InputProps) {
  const theme = useTheme();

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.shape_light_opacity100}
      secureTextEntry={secureTextEntry}
      value={value}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      onChangeText={onChange}
      style={{
        fontSize: RFValue(14),
        backgroundColor: "transparent",
      }}
      dense={true}
      right={right}
    />
  );
}
