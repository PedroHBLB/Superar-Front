import React from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { RootSiblingParent } from "react-native-root-siblings";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import { Provider as PaperProvider } from "react-native-paper";
import { useFonts } from "expo-font";
import { useAuth } from "./src/hooks/auth";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import theme from "./src/global/styles/theme";
import paperTheme from "./src/global/styles/paperTheme";

import AppLoading from "expo-app-loading";
import { Routes } from "./src/routes";
import { AppProvider } from "./src/hooks";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Comfortaa_700Bold,
  });
  const { isLoadingData } = useAuth();

  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  }

  changeScreenOrientation();

  if (!fontsLoaded || isLoadingData) {
    return <AppLoading />;
  }

  return (
    <PaperProvider theme={paperTheme}>
      <ThemeProvider theme={theme}>
        <RootSiblingParent>
          <AppProvider>
            <StatusBar
              barStyle="light-content"
              backgroundColor="transparent"
              translucent
            />
            <Routes />
          </AppProvider>
        </RootSiblingParent>
      </ThemeProvider>
    </PaperProvider>
  );
}
