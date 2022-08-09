import { Box, Flex, Heading, Image, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BMB_METADATA_BASEURL } from "../../conf";
import { BrownWave } from "../../shared/components/brown-wave/brown-wave.component";
import { YellowWave } from "../../shared/components/yellow-wave/yellow-wave.component";
import {
  BearDetail,
  BearMarketBuster,
} from "../bear-detail/bear-detail.component";

export interface IBearListProps {}

export function BearList(props: IBearListProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [bearList, setBearList] = useState<BearMarketBuster[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const items = [];
    for (let i = 0; i < 10; i++) {
      var response = await fetch(BMB_METADATA_BASEURL + "/" + i + ".json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = (await response.json()) as BearMarketBuster;
      items.push(json);
    }
    setBearList(items);
    setIsLoading(false);
  }

  return (
    <Flex
      paddingTop={{ base: "8rem", md: "8rem" }}
      bg="yellow"
      position="relative"
      alignItems="center"
      justifyContent="center"
    >
      <BrownWave
        rotate={true}
        style={{ position: "absolute", top: "0" }}
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
        <Box paddingBottom="25rem">
          <Flex wrap="wrap" justifyContent="space-evenly" maxWidth="90rem">
            {bearList.map((bear, index) => {
              return <BearDetail key={index} bear={bear}></BearDetail>;
            })}
          </Flex>
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
