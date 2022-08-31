import "./App.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { WalletProvider } from "./context/wallet.context";
import { ModalProvider } from "./context/modal.context";
import { Main } from "./components/main/main.component";
import { BrowserRouter } from "react-router-dom";

function App() {
  const colors = {
    black: "#322E1B",
    brown: "#714930",
    yellow: "#FFCC01",
    whiteGray: "#F6EDD5",
  };
  const fonts = {
    body: "BalooBhaijan, cursive",
    heading: "Coiny, cursive",
    mono: "Menlo, monospace",
  };

  const theme = extendTheme({ colors, fonts });

  return (
    <ModalProvider>
      <WalletProvider>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <Main></Main>
          </ChakraProvider>
        </BrowserRouter>
      </WalletProvider>
    </ModalProvider>
  );
}

export default App;
