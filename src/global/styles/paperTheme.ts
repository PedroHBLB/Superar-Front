import { DefaultTheme, configureFonts } from "react-native-paper";
import theme from "./theme";

const fontConfig = {
  default: {
    regular: {
      fontFamily: theme.fonts.regular,
    },
    medium: {
      fontFamily: theme.fonts.medium,
    },
    bold: {
      fontFamily: theme.fonts.bold,
    },
    light: {
      fontFamily: theme.fonts.regular,
    },
    thin: {
      fontFamily: theme.fonts.regular,
    },
  },
};

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    accent: theme.colors.shape,
    text: theme.colors.shape,
    placeholder: theme.colors.shape,
    disabled: theme.colors.shape,
  },
  fonts: configureFonts(fontConfig),
};

export default paperTheme;
