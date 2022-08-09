import { Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BMB_METADATA_BASEURL } from "../../conf";
import { BrownWave } from "../../shared/components/brown-wave/brown-wave.component";
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
    <Box paddingTop={{ sm: "8rem" }} bg="yellow" position="relative">
      <BrownWave
        rotate={true}
        style={{ position: "absolute", top: "0" }}
      ></BrownWave>
      {isLoading && <Spinner></Spinner>}
      {!isLoading && (
        <SimpleGrid columns={{ sm: 1, md: 3 }} flexWrap="wrap">
          {bearList.map((bear, index) => {
            return <BearDetail key={index} bear={bear}></BearDetail>;
          })}
        </SimpleGrid>
      )}
    </Box>
  );
}
