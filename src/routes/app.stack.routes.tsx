import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "styled-components";

import { Tips } from "../screens/Tips";
import { Award } from "../screens/Award";
import { Pillars } from "../screens/Pillars";
import { Requests } from "../screens/Requests";
import { Campaign } from "../screens/Campaign";
import { AppTabRoutes } from "./app.tab.routes";
import { Questions } from "../screens/Questions";
import { CameraView } from "../screens/CameraView";
import { AssetsPicker } from "../screens/AssetsPicker";

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes() {
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
      <Screen name="About" component={AppTabRoutes} />
      <Screen name="Award" component={Award} />
      <Screen name="Campaign" component={Campaign} />
      <Screen name="Tips" component={Tips} />
      <Screen name="Questions" component={Questions} />
      <Screen name="Pillars" component={Pillars} />
      <Screen name="Requests" component={Requests} />
      <Screen name="CameraView" component={CameraView} />
      <Screen name="AssetsPicker" component={AssetsPicker} />
    </Navigator>
  );
}
