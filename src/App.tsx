import React, { useEffect, useState } from "react";
import "./App.scss";
import { BearMarketBuster } from "./components/bear-detail/bear-detail.component";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Navbar } from "./components/navbar/navbar.component";
import { Home } from "./components/home/home.components";
import { Features } from "./components/features/features.component";
import { HowItWorks } from "./components/how-it-works/how-it-works.component";

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

  const [searchField, setSearchField] = useState("");
  const [bears, setBears] = useState<BearMarketBuster[]>([]);
  const [filteredBears, setFilteredBears] = useState(bears);

  const features = [
    "NO TWITTER  - NO DISCORD - NOTHING",
    "10 NFTs HAND DRAWN WITH iOS NOTES APP",
    "PRETTY USELESS PROJECT",
    "NONE OF THE FUNDS WILL BE SHARED WITH THE COMMUNTY BECAUSE THERE IS NO COMMUNITY",
  ];

  useEffect(() => {
    const bears: BearMarketBuster[] = [
      {
        image:
          "https://gateway.pinata.cloud/ipfs/QmS1gcMyZnSaeWPSVf89SU56LmuVdfgTct2Q7aVVRNGw9r/0.png",
        tokenId: 0,
        name: "Frank",
        description: "A funny little fellow",
      },
      {
        image:
          "https://gateway.pinata.cloud/ipfs/QmS1gcMyZnSaeWPSVf89SU56LmuVdfgTct2Q7aVVRNGw9r/1.png",
        tokenId: 1,
        name: "Nancy",
        description: "A rascal travelling the globe",
      },
      {
        image:
          "https://gateway.pinata.cloud/ipfs/QmS1gcMyZnSaeWPSVf89SU56LmuVdfgTct2Q7aVVRNGw9r/2.png",
        tokenId: 2,
        name: "Bethany",
        description: "Makes the printer go brr",
      },
    ];
    setBears(bears);
  }, []);

  useEffect(() => {
    const filteredBears = bears.filter((bear) => {
      return bear.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredBears(filteredBears);
  }, [bears, searchField]);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <Home></Home>
      <Features features={features}></Features>
      <HowItWorks></HowItWorks>
      {/* <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="Searc Bear"
      />
      <BearList bearList={filteredBears} /> */}
    </ChakraProvider>
  );
}

export default App;
