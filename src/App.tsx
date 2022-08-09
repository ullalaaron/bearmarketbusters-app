import "./App.scss";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Navbar } from "./components/navbar/navbar.component";
import { Home } from "./components/home/home.components";
import { Features } from "./components/features/features.component";
import { HowItWorks } from "./components/how-it-works/how-it-works.component";
import { BearList } from "./components/bear-list/bear-list.component";

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
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <Home></Home>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <BearList></BearList>
    </ChakraProvider>
  );
}

export default App;
