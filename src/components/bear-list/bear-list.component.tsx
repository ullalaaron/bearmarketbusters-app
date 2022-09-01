import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import {
  BMB_METADATA_BASEURL,
  NFT_ABI,
  NFT_ADDRESS,
  CHAIN_ID,
} from "../../conf";
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
import { Contract, ethers, utils } from "ethers";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import ConfettiGenerator from "confetti-js";

export interface IBearListProps {}

export function BearList(props: IBearListProps) {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(true);

  const [bearList, setBearList] = useState<BearMarketBuster[]>([]);

  const [isExploding, setIsExploding] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const walletContext = useContext(WalletContext);

  useEffect(() => {
    if (isExploding) {
      handleMintSuccess();
    }
  }, [isExploding]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (walletContext?.walletState?.provider && bearList?.length) {
      getTokenIdsMinted(walletContext?.walletState?.provider, bearList);
    }
  }, [walletContext?.walletState]);

  const mintBear = async (item: BearMarketBuster) => {
    try {
      setWallet(walletContext);
      const provider = walletContext.walletState.provider;
      var currentNetwork = await provider.getNetwork();
      if (CHAIN_ID !== currentNetwork.chainId) {
        throw new Error("Please switch to mainnet");
      }

      const signer = provider.getSigner();
      const nftContract = new Contract(NFT_ADDRESS, NFT_ABI, signer);
      const tx = await nftContract.mintBearMarketBuster(item.tokenId, {
        value: utils.parseEther(item.basePrice.toString()),
      });
      setIsLoading(true);
      await tx.wait();
      setIsLoading(false);
      toast({
        title: "HUURRAAY",
        description: "You succesfully minted Bear Market Buster " + item.name,
        status: "success",
        isClosable: true,
        position: "top",
      });
      setIsExploding(true);
      getTokenIdsMinted(walletContext.walletState.provider, bearList);
    } catch (ex) {
      toast({
        title: "Error minting Bear Market Buster",
        description: ex.toString(),
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleMintSuccess = () => {
    const confettiSettings = { target: "my-canvas" };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
      setIsExploding(false);
    }, 4000);
  };

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
    <div>
      <canvas
        id="my-canvas"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 10,
          pointerEvents: "none",
        }}
      ></canvas>

      <Flex
        paddingTop={{ base: "8rem", md: "8rem" }}
        bg="yellow"
        position="relative"
        alignItems="center"
        justifyContent="center"
        id="mint"
        overflow={"visible"}
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
                activeIndex={activeIndex}
                items={bearList.map((item) => (
                  <BearDetail bear={item} mintFn={mintBear}></BearDetail>
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
                  setActiveIndex(e.slide);
                }}
              />
            </Box>
            <Box textAlign="center" marginTop={"5rem"} w="100%">
              <Text>Verified smart contract address:</Text>
              <Button variant="nav" maxW="100%" textOverflow={"ellipsis"}>
                <Link
                  href="https://etherscan.io/address/0xa49743674cc55c306fe919949665114c9a7c0e83"
                  target="_blank"
                  rel="noopener noreferrer"
                  textDecoration="underline"
                  cursor="pointer"
                  textOverflow={"ellipsis"}
                >
                  {NFT_ADDRESS} <ExternalLinkIcon mx="2px" />
                </Link>
              </Button>
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
    </div>
  );
}
