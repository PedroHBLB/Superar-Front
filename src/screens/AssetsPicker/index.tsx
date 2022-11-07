import React, { useMemo } from "react";
import { AssetsSelector } from "expo-images-picker";

import { Container } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { MediaType } from "expo-media-library";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Background } from "../../components/Background";
import { Asset } from "../Requests";

type Params = {
  length: number;
};

export function AssetsPicker() {
  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();
  const { length } = route.params as Params;

  const onSuccess = (data: Asset[]) => {
    navigation.navigate("Requests", { data });
  };

  const widgetErrors = useMemo(
    () => ({
      errorTextColor: theme.colors.primary,
      errorMessages: {
        hasErrorWithPermissions: "Por favor, permita o acesso.",
        hasErrorWithLoading:
          "Ocorreu um erro durante o carregamento das imagens.",
        hasErrorWithResizing:
          "Ocorreu um erro durante o carregamento das imagens.",
        hasNoAssets: "Nenhuma imagem encontrada",
      },
    }),
    []
  );

  const widgetSettings = useMemo(
    () => ({
      getImageMetaData: true,
      initialLoad: 100,
      assetsType: [MediaType.photo],
      minSelection: 1,
      maxSelection: 3 - length,
      portraitCols: 4,
      landscapeCols: 4,
    }),
    []
  );

  const widgetNavigator = useMemo(
    () => ({
      Texts: {
        finish: "Pronto",
        back: "Voltar",
        selected: "selecionado(s)",
      },
      midTextColor: theme.colors.ongoing,
      minSelection: 1,
      buttonTextStyle: {
        fontFamily: theme.fonts.regular,
        color: theme.colors.shape,
      },
      buttonStyle: {
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
      },
      onBack: () => navigation.goBack(),
      onSuccess: (data: Asset[]) => onSuccess(data),
    }),
    []
  );

  const widgetStyles = useMemo(
    () => ({
      margin: 1,
      bgColor: theme.colors.secondary100,
      spinnerColor: theme.colors.primary,
      widgetWidth: 99,
      videoIcon: {
        Component: Ionicons,
        iconName: "ios-videocam",
        color: theme.colors.secondary50,
        size: 20,
      },
      selectedIcon: {
        Component: Ionicons,
        iconName: "ios-checkmark-circle-outline",
        color: theme.colors.success,
        bg: theme.colors.ongoing_light,
        size: 26,
      },
    }),
    []
  );

  return (
    <Container>
      <Background>
        <AssetsSelector
          Settings={widgetSettings}
          Errors={widgetErrors}
          Styles={widgetStyles}
          Navigator={widgetNavigator}
        />
      </Background>
    </Container>
  );
}
