import "../styles/globals.css";
import { ChakraProvider, useColorMode } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  const { colorMode, toggleColorMode } = useColorMode();
  console.log("Default color mode: ", colorMode);

  return (
    <ChakraProvider resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
