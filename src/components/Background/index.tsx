import React, { ReactNode } from "react";

type Props = {
  border?: boolean;
  children: ReactNode;
};

import { BackgroundColor } from "./styles";

export function Background({ border, children }: Props) {
  return (
    <BackgroundColor
      style={{
        borderTopLeftRadius: border ? 10 : 0,
        borderTopRightRadius: border ? 10 : 0,
      }}
    >
      {children}
    </BackgroundColor>
  );
}
