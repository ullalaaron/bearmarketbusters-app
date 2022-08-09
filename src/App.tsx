import { useEffect, useState } from "react";
import "./App.scss";
import { BearMarketBuster } from "./components/bear-detail/bear-detail.component";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Navbar } from "./components/navbar/navbar.component";
import { Home } from "./components/home/home.components";
import { Features } from "./components/features/features.component";
import { HowItWorks } from "./components/how-it-works/how-it-works.component";
import { BearList } from "./components/bear-list/bear-list.component";
import { BearsMetadata } from "./shared/data/metadata";

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
  const [bearList, setBearList] = useState<BearMarketBuster[]>([]);

  const features = [
    "NO TWITTER  - NO DISCORD - NOTHING",
    "10 NFTs HAND DRAWN WITH iOS NOTES APP",
    "PRETTY USELESS PROJECT",
    "NONE OF THE FUNDS WILL BE SHARED WITH THE COMMUNTY BECAUSE THERE IS NO COMMUNITY",
  ];

  useEffect(() => {
    const bearList: BearMarketBuster[] = BearsMetadata;
    setBearList(bearList);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <Home></Home>
      <Features features={features}></Features>
      <HowItWorks></HowItWorks>
      <BearList bearList={bearList}></BearList>
    </ChakraProvider>
  );
}

export default App;
