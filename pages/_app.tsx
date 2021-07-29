import { VechaiProvider } from "@vechaiui/react";
import { ColorScheme, extendTheme, colors } from "@vechaiui/react";
import "tailwindcss/tailwind.css";
import "../styles/Main.component.css";

export const cool: ColorScheme = {
  id: "cool",
  type: "dark",
  colors: {
    bg: {
      base: colors.coolGray["900"],
      fill: colors.coolGray["900"],
    },
    text: {
      foreground: colors.coolGray["100"],
      muted: colors.coolGray["300"],
    },
    primary: colors.cyan,
    neutral: colors.coolGray,
  },
};

const light: ColorScheme = {
  id: "light",
  type: "light",
  colors: {
    bg: {
      base: colors.gray["800"],
      fill: colors.gray["900"],
    },
    text: {
      foreground: colors.gray["100"],
      muted: colors.gray["300"],
    },
    primary: colors.teal,
    neutral: colors.gray,
  },
};

const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    light,
    cool,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <VechaiProvider theme={theme} colorScheme="cool">
      <Component {...pageProps} />
    </VechaiProvider>
  );
}

export default MyApp;
