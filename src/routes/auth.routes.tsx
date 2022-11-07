import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "styled-components";

import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { Recover } from "../screens/Recover";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="Recover" component={Recover} />
    </Navigator>
  );
}
