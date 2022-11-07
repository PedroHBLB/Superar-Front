import React from "react";
import { TouchableWithoutFeedbackProps } from "react-native";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { IconButtonContainer, IconButton, Icon } from "./styles";

type ButtonTabProps = BorderlessButtonProps & {
  name: string;
  isActive: boolean;
};

export function ButtonTabSelected({ name, isActive, ...rest }: ButtonTabProps) {
  return (
    <IconButtonContainer isActive={isActive}>
      <IconButton {...rest}>
        <Icon name={name} isActive={isActive} />
      </IconButton>
    </IconButtonContainer>
  );
}
