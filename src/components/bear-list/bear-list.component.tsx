import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BMB_METADATA_BASEURL, NFT_ABI, NFT_ADDRESS } from "../../conf";
import { BrownWave } from "../../shared/components/brown-wave/brown-wave.component";
import { YellowWave } from "../../shared/components/yellow-wave/yellow-wave.component";
import {
  BearDetail,
  BearMarketBuster,
} from "../bear-detail/bear-detail.component";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { setWallet } from "../../utils/web3.utils";
import { WalletContext } from "../../context/wallet.context";
import { Contract, ethers } from "ethers";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export interface IBearListProps {}

export function BearList(props: IBearListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [bearList, setBearList] = useState<BearMarketBuster[]>([]);

  const walletContext = useContext(WalletContext);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (walletContext?.walletState?.provider && bearList?.length) {
      getTokenIdsMinted(walletContext?.walletState?.provider, bearList);
    }
  }, [walletContext?.walletState]);

  const getTokenIdsMinted = async (
    provider: ethers.providers.Web3Provider,
    bearList: BearMarketBuster[]
  ) => {
    const nftContract = new Contract(NFT_ADDRESS, NFT_ABI, provider);
    const updatedList = await Promise.all(
      bearList.map(async (item, index) => {
        try {
          const _ = await nftContract.tokenURI(index);
          item.minted = true;
        } catch {
          item.minted = false;
        }
        return item;
      })
    );
    console.log(updatedList);
    setBearList(updatedList);
  };

  async function fetchData() {
    const items: BearMarketBuster[] = [];
    for (let i = 0; i < 10; i++) {
      var response = await fetch(BMB_METADATA_BASEURL + "/" + i + ".json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = (await response.json()) as BearMarketBuster;
      items.push(json);
    }
    setBearList(items);
    setWallet(walletContext!);
    setIsLoading(false);
  }

  return (
    <Flex
      paddingTop={{ base: "8rem", md: "8rem" }}
      bg="yellow"
      position="relative"
      alignItems="center"
      justifyContent="center"
      id="mint"
    >
      <BrownWave
        rotate={true}
        style={{ position: "absolute", top: "-0.5px" }} // hack: little yellow dot was showing up on some screens
      ></BrownWave>
      {isLoading && (
        <Box>
          <Heading>Loading Bear Market Busters...</Heading>
          <Spinner
            size="xl"
            color="brown"
            emptyColor="gray"
            thickness="1rem"
            speed="0.65s"
            margin={"3rem 40%"}
          ></Spinner>
        </Box>
      )}
      {!isLoading && (
        <Box width="100%" paddingBottom="25rem" paddingTop="3rem">
          <Box maxWidth="80rem" margin={"0 auto"}>
            <AliceCarousel
              mouseTracking
              activeIndex={0}
              items={bearList.map((item) => (
                <BearDetail bear={item}></BearDetail>
              ))}
              infinite={true}
              keyboardNavigation={true}
              responsive={{
                0: { items: 1 },
              }}
              renderPrevButton={() => (
                <Button
                  leftIcon={<BsFillArrowLeftCircleFill />}
                  variant="link"
                  fontSize="3rem"
                  color="brown"
                ></Button>
              )}
              renderNextButton={() => (
                <Button
                  leftIcon={<BsFillArrowRightCircleFill />}
                  variant="link"
                  fontSize="3rem"
                  color="brown"
                ></Button>
              )}
              onSlideChanged={(e) => {
                console.log(e);
              }}
            />
          </Box>
          <Box textAlign="center" marginTop={"5rem"}>
            <Text>Verified smart contract address:</Text>
            <Link
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              textDecoration="underline"
              cursor="pointer"
            >
              <Button variant="nav">
                #021561345789 <ExternalLinkIcon mx="2px" />
              </Button>
            </Link>
          </Box>
          <Image
            src="/img/tree2.png"
            position="absolute"
            left="0rem"
            bottom="0.5rem"
            maxHeight={["15rem", "25rem"]}
          ></Image>
          <Image
            src="/img/tree3.png"
            position="absolute"
            left="4rem"
            bottom="0.5rem"
            maxHeight={["20rem", "40rem"]}
          ></Image>
          <Image
            src="/img/tree1.png"
            position="absolute"
            right="0rem"
            bottom="0.5rem"
            maxHeight={["25rem", "40rem"]}
          ></Image>
          <YellowWave></YellowWave>
        </Box>
      )}
    </Flex>
  );
}
