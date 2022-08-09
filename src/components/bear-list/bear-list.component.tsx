import { Box, SimpleGrid } from "@chakra-ui/react";
import { BrownWave } from "../../shared/components/brown-wave/brown-wave.component";
import {
  BearDetail,
  BearMarketBuster,
} from "../bear-detail/bear-detail.component";

export interface IBearListProps {
  bearList: BearMarketBuster[];
}

export function BearList(props: IBearListProps) {
  return (
    <Box paddingTop={{ sm: "8rem" }} bg="yellow" position="relative">
      <BrownWave
        rotate={true}
        style={{ position: "absolute", top: "0" }}
      ></BrownWave>
      <SimpleGrid columns={{ sm: 1, md: 3 }} flexWrap="wrap">
        {props.bearList.map((bear, index) => {
          return <BearDetail key={index} bear={bear}></BearDetail>;
        })}
      </SimpleGrid>
    </Box>
  );
}
