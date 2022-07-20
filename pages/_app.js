// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import { useColorMode } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const theme = extendTheme({
  colors: {
    brand: {
      light: {
        bkg: "#FAFAFF",
        heading: "#15162A",
        text: "#30343F",
        highlight: "#5271FF",
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
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
