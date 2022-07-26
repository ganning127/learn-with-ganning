// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import { useColorMode } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import { useEffect } from "react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

function ForceLightMode({ children }) {
  // force light mode b/c of ChakraUI bug
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "light") return;
    toggleColorMode();
  }, [colorMode]);

  return children;
}

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  colors: {
    brand: {
      light: {
        bkg: "#FAFAFF",
        heading: "#15162A",
        text: "#30343F",
        blue: {
          100: "#B3D8FC",
          300: "#6EB1F5",
          600: "#0353A4",
          700: "#023E7D",
          800: "#002855",
        },
        yellow: {
          100: "#FFEA80",
          400: "#FFD60A",
        },
      },
      dark: {
        bkg: "#15162A",
        heading: "white",
        text: "#FAFAFF",
        highlight: "#A1B1FA",
      },
    },
  },
  initalColorMode: "light",
  useSystemColorMode: false,
});

const GlobalStyle = ({ children }) => {
  let { colorMode } = useColorMode();
  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "#FAFAFF" : "#15161a"};
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle>
        <ForceLightMode>
          <Component {...pageProps} />
        </ForceLightMode>
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
